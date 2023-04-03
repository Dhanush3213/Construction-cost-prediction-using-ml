from django.urls import path
from .views import HomeSampleAPIView

urlpatterns = [
    path('home-samples/', HomeSampleAPIView.as_view(), name='home-samples'),
]