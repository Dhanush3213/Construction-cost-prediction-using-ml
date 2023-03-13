from django.urls import path
from . import views
from .views import home, signup, login,HomeView,HousePricePredictionView

urlpatterns = [
    path('predict/', views.HousePricePredictionView.as_view(), name='HousePricePrediction'),
    path('home-prices/', views.home_price_list, name='home_price_list'),
    path('home-prices/<int:pk>/', views.home_price_detail, name='home_price_detail'),
    path('',home, name='home'),
    path('signup', signup, name='signup'),
    path('login', login, name='login'),
    path('homes/<int:min_price>/<int:max_price>/', HomeView.as_view(), name='homes'),

]




   
