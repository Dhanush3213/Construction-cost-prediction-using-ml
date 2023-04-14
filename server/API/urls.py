from django.urls import path

from .views import home, signup, login,update_password,logout,profile



urlpatterns = [
    #general urls
    path('', home, name='home'),
    path('signup', signup, name='signup'),
    path('login', login, name='login'),
    path('logout/', logout, name='logout'),
    path('update_password/', update_password, name='update_password'),
    path('profile/', profile, name='profile'),

]