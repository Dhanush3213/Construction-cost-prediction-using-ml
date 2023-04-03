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

from rest_framework_simplejwt.tokens import RefreshToken

@api_view(["POST"])
def logout(request):
    context = {}
    if request.method == "POST":
        try:
            refresh_token = request.data["refresh_token"]
            token = JWT.objects.get(token=refresh_token)
            token.delete()
            # Blacklist the refresh token to prevent it from being used again
            RefreshToken(refresh_token).blacklist()
            context['message'] = 'Logout successful!'
            return Response(context, status=status.HTTP_200_OK)
        except JWT.DoesNotExist:
            context['error'] = 'Invalid refresh token, please try again'
            return Response(context, status=status.HTTP_400_BAD_REQUEST)
        
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import update_session_auth_hash
from django.contrib.auth.forms import PasswordChangeForm

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def update_password(request):
    context = {}
    user = request.user
    form = PasswordChangeForm(user, request.data)
    if form.is_valid():
        user = form.save()
        # Update the session auth hash to prevent the user from being logged out
        update_session_auth_hash(request, user)
        context['message'] = 'Password updated successfully!'
        return Response(context, status=status.HTTP_200_OK)
    else:
        context['error'] = form.errors
        return Response(context, status=status.HTTP_400_BAD_REQUEST)

from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from .models import JWT

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def logout(request):
    context = {}
    try:
        # Get the user's JWT token and delete it from the database
        user_jwt = JWT.objects.get(user_id=request.user.id)
        user_jwt.delete()
        context['message'] = 'Logout successful'
        return Response(context, status=status.HTTP_200_OK)
    except Exception as e:
        context['error'] = str(e)
        return Response(context, status=status.HTTP_400_BAD_REQUEST)


from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from .serializers import UserSerializer

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def profile(request):
    user = request.user
    serializer = UserSerializer(user)
    return Response(serializer.data, status=status.HTTP_200_OK)