from django.urls import path
from . import views
from .views import home, signup, login

urlpatterns = [
    path('predict-home-price/', views.predict_home_price, name='predict_home_price'),
    path('home-prices/', views.home_price_list, name='home_price_list'),
    path('home-prices/<int:pk>/', views.home_price_detail, name='home_price_detail'),
    path('', home, name='home'),
    path('signup', signup, name='signup'),
    path('login', login, name='login'),

]