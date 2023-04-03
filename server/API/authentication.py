# imports
from django.conf import settings
import jwt
from datetime import datetime, timedelta
from django.contrib.auth.models import User
from rest_framework.authentication import BaseAuthentication





def get_access_token(user_dict: dict, to_expiry: int) -> str:
    '''
        A function to generate access token, by encoding the passed user_dict,
        and 60 minutes added to the time the function was called.
        The encoding key is the django app setting's key
        And the encoding algorithm is HS256

        Parameters:
                    user_dict: dict -> a dictionary with one entry where the key is "user_id", and the value is the ID of the authenticated user
                    to_expire: int -> minutes before the access token expires
    '''
    return jwt.encode(
        payload={"exp": datetime.now() + timedelta(minutes=to_expiry), **user_dict},
        key=settings.SECRET_KEY,
        algorithm='HS256'
    )








class MyAuthentication(BaseAuthentication):
    '''
        Authentication class to verify logged in users' token whenever they try to access routes that require the user to login.
    '''

    def authenticate(self, request):
        '''Authenticate the user and return the Id of the authenticated user'''
        data = self.validate_request(request.headers)
        if not data:
            return None, None

        return self.get_user(data['user_id']), None

        
        
    def get_user(self, user_id):
        '''Accepts a user's ID and checks if the user with that ID exists, and then returns the ID if it exists, else return None
        '''
        try:
            user = User.objects.get(id=user_id)
            return user
        except Exception:
            return None



    def validate_request(self, headers):
        '''
        Get the Authorization token from the request headers, verify if the token is valid, if it is then return the decoded data, else return None
        '''
        authorization = headers.get('Authorization', None)
        if not authorization:
            return None
        token = headers['Authorization'][7:]
        decoded_data = self.verify_token(token)
        if not decoded_data:
            return None
        return decoded_data


    def verify_token(token):
        '''
        Accepts a login token, decode it, check if it is still valid, if it is then return the decoded data, else return None
        '''
        try:
            decoded = jwt.decode(token, settings.SECRET_KEY, algorithms='HS256')
        except Exception:
            return None

        exp = decoded['exp']

        if datetime.now().timestamp() > exp:
            return None
        
        return decoded