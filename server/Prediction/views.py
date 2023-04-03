from django.shortcuts import render
import numpy as np
import pandas as pd
from .models import Home
from rest_framework.views import APIView
import pickle
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import HomePrice
from rest_framework import status
from rest_framework.decorators import api_view
from .serializers import MySerializer,HomePriceSerializer


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
        with open('D://final year project/construction cost estimation using ml/constructionproj/server/Prediction/classifier/banglore_home_prices_model.pickle', 'rb') as f:
            model = pickle.load(f)
        
        # Get the input data from the request
        data = request.data
        def predict_price(location, sqft, bath, bhk):
            x = pd.read_csv("D://final year project/construction cost estimation using ml/constructionproj/server/APIProject/Prediction/classifier/train.csv")
            loc_index = np.where(x.columns == location)[0][0]
            inputs = np.zeros(len(x.columns))
    
            inputs[0] = sqft
            inputs[1] = bath
            inputs[2] = bhk
            if loc_index >= 0:
                inputs[loc_index] = 1
            return inputs
        
        # Perform prediction using the trained model
        input_features =predict_price(data['location'], data['sqft'], data['bath'],data['bhk'])
        prediction = model.predict([input_features])[0]
        
        # Save the input data and predicted price to the database
        house = HomePrice(location=data['location'],  sqft=data['sqft'], bath=data['bath'], bhk=data['bhk'],price=prediction)
        house.save()
        
        # Return the predicted house price as a response
        return Response({'prediction': prediction})


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




