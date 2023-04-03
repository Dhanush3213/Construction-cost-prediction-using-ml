#django imports
from django.contrib.auth import authenticate

#rest_frameworf imports
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

#import from custom files
from .serializers import SignUpSerializer, LoginSerializer
from .authentication import get_access_token, MyAuthentication
from .models import JWT





#homepage view
@api_view(['GET'])
def home(request):
    context = {
        'message' : "Home page"
    }
    return Response(context, status=status.HTTP_200_OK)




#signup view
@api_view(['GET', 'POST'])
def signup(request):
    if request.method == 'GET':
        context = {}
        context['message'] = 'Welcome to User signup page, please pass the required fields'
        context['required'] = 'username, first_name, last_name, password, password_2, email'
        return Response(context, status=status.HTTP_200_OK)

    if request.method == 'POST':
        serializer = SignUpSerializer(data=request.data)
        context = {}
        if serializer.is_valid():
            new_user = serializer.save()

            context['response'] = 'User created successfully, you can now login with your username and password'
            context['username'] = new_user.username
            context['status'] = 201
            return Response(context, status=status.HTTP_201_CREATED)

        else:
            context['error'] = serializer.errors
            context['status'] = 422
            return Response(context, status=status.HTTP_400_BAD_REQUEST)
""" {
   "username" : "my_username",
   "first_name" : "My",
   "last_name" : "Username",
  
   "email" : "user@example.test",
   "password" :  "my_password",
 "password_2" :  "my_password",

}{
   "username" : "my_sername",
   "first_name" : "My",
   "last_name" : "Usrname",
  
   "email" : "user2@example.test",
   "password" :  "my_password",
 "password_2" :  "my_password"

}
 """

# login view
@api_view(["GET", "POST"])
def login(request):
    context = {}
    if request.method == 'GET':
        context['message'] = 'Welcome to login page, please pass the required fields'
        context['required'] = 'username, password'
        return Response(context, status=status.HTTP_200_OK)



    if request.method == "POST":
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = authenticate(username=serializer.validated_data['username'], password=serializer.validated_data['password'])
            if user is not None:
                JWT.objects.filter(user_id=user.id).delete()
                access_token = get_access_token({'user_id':user.id}, to_expiry=60)
                JWT.objects.create(user_id=user.id, access=access_token)
                context['message'] = 'Login successful!'
                context['access_token'] = access_token
                context['status'] = 201
                return Response(context, status=status.HTTP_200_OK)
            else:
                context['status'] = 422
                context['error'] = "Invalid login credentials, please check and try again"
                return Response(context, status=status.HTTP_400_BAD_REQUEST)
        else:
            context['status'] = 422
            context['error'] = serializer.errors
            return Response(context, status=status.HTTP_400_BAD_REQUEST)