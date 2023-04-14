from django.shortcuts import render
import numpy as np
import pandas as pd
from rest_framework.views import APIView
import pickle
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import HomePrice
from rest_framework import status
from rest_framework.decorators import api_view
from .serializers import MySerializer,HomePriceSerializer
from django.conf import settings
import requests
import locale


# Create your views here.
class HousePricePredictionView(APIView):
    def get(self, request):
        # Get all houses from the database
        houses = HomePrice.objects.all()
        # Serialize the houses into JSON format
        data = [{'location': house.location, 'sqft': house.sqft, 'bath':house.bath ,'bhk':house.bhk,'price': house.price} for house in houses]
        return Response(data)
  

    def post(self, request):
        # Load the trained model from a pickle file
        with open('./Prediction/classifier/banglore_home_prices_model.pickle', 'rb') as f:
            model = pickle.load(f)
        
        # Get the input data from the request
        data = request.data
        def predict_price(location, sqft, bath, bhk):
            x = pd.read_csv("./Prediction/classifier/train.csv")
            loc_index = np.where(x.columns == location)[0]
            inputs = np.zeros(len(x.columns))
    
            inputs[0] = sqft
            inputs[1] = bath
            inputs[2] = bhk
            if loc_index >= 0:
                inputs[loc_index] = 1
            return inputs
        
        # Perform prediction using the trained model
        input_features =predict_price(data['location'], data['sqft'], data['bath'],data['bhk'])
        prediction =round(int(100000*(model.predict([input_features])[0])))
        location=data['location']

        # Save the input data and predicted price to the database
        house = HomePrice(location=data['location'],  sqft=data['sqft'], bath=data['bath'], bhk=data['bhk'],price=prediction)
        house.save()
        locale.setlocale(locale.LC_MONETARY, 'en_IN')
        prediction=locale.currency(prediction, grouping=True)
        if prediction==None:
            # Return the predicted house price as a response
           return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
           return Response({'prediction': prediction,'location':location},status=status.HTTP_200_OK)
           
        
        return Response({'prediction': prediction,'location':location},status=status.HTTP_200_OK)
    

@api_view(['GET'])
def home_price_list(request):
    home_prices = HomePrice.objects.all()
    serializer = MySerializer(home_prices, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def home_price_detail(request, pk):
    try:
        home_price = HomePrice.objects.get(pk=pk)
    except HomePrice.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = HomePriceSerializer(home_price)
    return Response(serializer.data)




class LocationMapView(APIView):
    
    def get(self, request, *args, **kwargs):
        location = request.GET.get('location')
        if not location:
            return Response({'error': 'Location parameter is required.'}, status=400)
        # call external API to get location details
        response = requests.get(f'https://maps.googleapis.com/maps/api/geocode/json?address={location}&key={settings.GOOGLE_MAPS_API_KEY}')
        if response.status_code == 200:
            result = response.json()
            # extract latitude and longitude from response
            lat = result['results'][0]['geometry']['location']['lat']
            lng = result['results'][0]['geometry']['location']['lng']
            # create url for map image
            map_url = f'https://maps.googleapis.com/maps/api/staticmap?center={lat},{lng}&zoom=12&size=400x400&key={settings.GOOGLE_MAPS_API_KEY}'
            return Response({'map_url': map_url}, status=200)
        else:
            return Response({'error': 'Error fetching location details.'}, status=response.status_code)

