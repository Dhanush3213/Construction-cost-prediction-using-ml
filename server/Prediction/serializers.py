from rest_framework import serializers
from .models import HomePrice
from django.contrib.auth.models import User
from .models import Home

class HomePriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomePrice
        fields = ['location', 'sqft', 'bath', 'bhk']

class MySerializer(serializers.Serializer):
    location = serializers.IntegerField()
    sqft=serializers.FloatField()
    bath=serializers.FloatField()
    bhk=serializers.IntegerField()
