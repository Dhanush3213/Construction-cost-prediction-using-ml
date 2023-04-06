from django.urls import path
from . import views
from . views import HousePricePredictionView

urlpatterns = [
    path('predict/', views.HousePricePredictionView, name='HousePricePrediction'),
]