from rest_framework import serializers
from .models import HomePrice
from django.contrib.auth.models import User


class HomePriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomePrice
        fields = ['location', 'sqft', 'bath', 'bhk','price']

class MySerializer(serializers.Serializer):
    location = serializers.CharField()
    sqft=serializers.FloatField()
    bath=serializers.FloatField()
    bhk=serializers.IntegerField()
    price=serializers.FloatField()
