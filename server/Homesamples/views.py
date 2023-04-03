from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import HomeSample
from .serializers import HomeSampleSerializer

class HomeSampleAPIView(generics.ListAPIView):
    serializer_class = HomeSampleSerializer

    def get_queryset(self):
        # retrieve the predicted house price from the request
        predicted_price = self.request.query_params.get('predicted_price')

        # use the predicted price to filter the queryset of HomeSample objects
        queryset = HomeSample.objects.filter(predicted_price=predicted_price)

        return queryset
