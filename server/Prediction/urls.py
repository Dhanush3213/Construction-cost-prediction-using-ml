from django.urls import path
from . import views
from .views import HousePricePredictionView,LocationMapView

urlpatterns = [
    path('predict/', views.HousePricePredictionView.as_view(), name='HousePricePrediction'),
    path('home-prices/', views.home_price_list, name='home_price_list'),
    path('home-prices/<int:pk>/', views.home_price_detail, name='home_price_detail'),
    path('location-map/', LocationMapView.as_view(), name='location-map'),
]