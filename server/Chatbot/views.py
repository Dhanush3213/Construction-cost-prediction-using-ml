from django.shortcuts import render

# Create your views here.
# views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
import numpy as np
import pandas as pd
import pickle

@api_view(['POST'])
def HousePricePredictionView(request):
        # Load the trained model from a pickle file
        with open('D://final year project/construction cost estimation using ml/constructionproj/server/Prediction/classifier/banglore_home_prices_model.pickle', 'rb') as f:
            model = pickle.load(f)
        
        # Get the input data from the request
        data = request.data
        def predictprice(location, sqft, bath, bhk):
            x = pd.read_csv("D://final year project/construction cost estimation using ml/constructionproj/server/Prediction/classifier/train.csv")
            loc_index = np.where(x.columns == location)[0]
            inputs = np.zeros(len(x.columns))
    
            inputs[0] = sqft
            inputs[1] = bath
            inputs[2] = bhk
            if loc_index >= 0:
                inputs[loc_index] = 1
            return inputs
        
        # Perform prediction using the trained model
        input_features =predictprice(data['location'], data['sqft'], data['bath'],data['bhk'])
        prediction = model.predict([input_features])[0]
        
        return Response({'predicted_price': prediction})
