""" from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.decorators import action
# Create your views here.
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from .apps import PredictionConfig
import pandas as pd
import pickle
import numpy as np
# Create your views here.
 @api_view(['GET', 'POST'])
def api_add(request):
    sum = 0
    response_dict = {}
    if request.method == 'GET':
        # Do nothing
        pass
    elif request.method == 'POST':
        # Add the numbers
        data = request.data
        for key in data:
            sum += data[key]
        response_dict = {"sum": sum}
    return Response(response_dict, status=status.HTTP_201_CREATED)


# Class based view to add numbers
class Add_Values(APIView):
    def post(self, request, format=None):
        sum = 0
        # Add the numbers
        data = request.data
        for key in data:
            sum += data[key]
        response_dict = {"sum": sum}
        return Response(response_dict, status=status.HTTP_201_CREATED)
    
 

# Class based view to predict based on IRIS model



class price_Model_Predict(APIView):
    
    def post(self, request):
        
        # Load the machine learning model and data
        model_path = "D://final year project/datasets/RidgeModel_4_1.pkl"
        model = pickle.load(open(model_path, 'rb'))
        data = request.data
        
        # Create a pandas dataframe from the input data
        df = pd.DataFrame.from_dict(data, orient='index').T
        
        # Make a prediction using the model
        prediction = model.predict(df)[0]
        
        # Return the prediction as a JSON response
        return JsonResponse({'prediction': prediction}) """


from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render
from .serializers import MySerializer,HomePriceSerializer
from .models import HomePrice
import numpy as np
import pandas as pd
import joblib
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Home
from .serializers import HomeSerializer
#rest_frameworf imports
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

#import from custom files
from .serializers import SignUpSerializer, LoginSerializer
from .authentication import get_access_token, MyAuthentication
from .models import JWT

# Load the pre-trained model

  


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

#django imports





#homepage view
@api_view(['GET'])
def home(request):
    context = {
        'message' : "Home page"
    }
    return Response(context, status=status.HTTP_200_OK)




#signup view
@api_view(['GET', 'POST'])
def signup(request):
    if request.method == 'GET':
        context = {}
        context['message'] = 'Welcome to User signup page, please pass the required fields'
        context['required'] = 'username, first_name, last_name, password, password_2, email'
        return Response(context, status=status.HTTP_200_OK)

    if request.method == 'POST':
        serializer = SignUpSerializer(data=request.data)
        context = {}
        if serializer.is_valid():
            new_user = serializer.save()

            context['response'] = 'User created successfully, you can now login with your username and password'
            context['username'] = new_user.username
            return Response(context, status=status.HTTP_201_CREATED)

        else:
            context['error'] = serializer.errors
            return Response(context, status=status.HTTP_400_BAD_REQUEST)



# login view
@api_view(["GET", "POST"])
def login(request):
    context = {}
    if request.method == 'GET':
        context['message'] = 'Welcome to login page, please pass the required fields'
        context['required'] = 'username, password'
        return Response(context, status=status.HTTP_200_OK)



    if request.method == "POST":
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = authenticate(username=serializer.validated_data['username'], password=serializer.validated_data['password'])
            if user is not None:
                JWT.objects.filter(user_id=user.id).delete()
                access_token = get_access_token({'user_id':user.id}, to_expiry=60)
                JWT.objects.create(user_id=user.id, access=access_token)
                context['message'] = 'Login successful!'
                context['access_token'] = access_token

                return Response(context, status=status.HTTP_200_OK)
            else:
                context['error'] = "Invalid login credentials, please check and try again"
                return Response(context, status=status.HTTP_400_BAD_REQUEST)
        else:
            context['error'] = serializer.errors
            return Response(context, status=status.HTTP_400_BAD_REQUEST)










class HomeView(APIView):
    def get(self, request, min_price=None, max_price=None):
        queryset = Home.objects.all()
        if min_price is not None:
            queryset = queryset.filter(price__gte=min_price)
        if max_price is not None:
            queryset = queryset.filter(price__lte=max_price)
        serializer = HomeSerializer(queryset, many=True)
        return Response(serializer.data)




import pickle
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import HomePrice

class HousePricePredictionView(APIView):
    def get(self, request):
        # Get all houses from the database
        houses = HomePrice.objects.all()
        # Serialize the houses into JSON format
        data = [{'location': house.location, 'sqft': house.sqft, 'bath':house.bath ,'bhk':house.bhk,'price': house.price} for house in houses]
        return Response(data)
  

    def post(self, request):
        # Load the trained model from a pickle file
        with open('../APIProject/Prediction/classifier/banglore_home_prices_model.pickle', 'rb') as f:
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


#you have to make train.csv file and load that one and after that you can apply logic and you can able to load all the column values