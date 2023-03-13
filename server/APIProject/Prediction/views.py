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
import joblib
from django.contrib.auth import authenticate

#rest_frameworf imports
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

#import from custom files
from .serializers import SignUpSerializer, LoginSerializer
from .authentication import get_access_token, MyAuthentication
from .models import JWT

# Load the pre-trained model
model = joblib.load('D://final year project/datasets/another dataset/bangalore_home_prices_model.pickle')
Col_Name=('total_sqft','bath','bhk','1st Block Jayanagar','1st Phase JP Nagar','2nd Phase Judicial Layout','2nd Stage Nagarbhavi','5th Block Hbr Layout','5th Phase JP Nagar','6th Phase JP Nagar','7th Phase JP Nagar','8th Phase JP Nagar','9th Phase JP Nagar','AECS Layout','Abbigere','Akshaya Nagar','Ambalipura','Ambedkar Nagar','Amruthahalli','Anandapura','Ananth Nagar','Anekal','Anjanapura','Ardendale','Arekere','Attibele','BEML Layout','BTM 2nd Stage','BTM Layout','Babusapalaya','Badavala Nagar','Balagere','Banashankari','Banashankari Stage II','Banashankari Stage III','Banashankari Stage V','Banashankari Stage VI','Banaswadi','Banjara Layout','Bannerghatta','Bannerghatta Road','Basavangudi','Basaveshwara Nagar','Battarahalli','Begur','Begur Road','Bellandur','Benson Town','Bharathi Nagar','Bhoganhalli','Billekahalli','Binny Pete','Bisuvanahalli','Bommanahalli','Bommasandra','Bommasandra Industrial Area','Bommenahalli','Brookefield','Budigere','CV Raman Nagar','Chamrajpet','Chandapura','Channasandra','Chikka Tirupathi','Chikkabanavar','Chikkalasandra','Choodasandra','Cooke Town','Cox Town','Cunningham Road','Dasanapura','Dasarahalli','Devanahalli','Devarachikkanahalli','Dodda Nekkundi','Doddaballapur','Doddakallasandra','Doddathoguru','Domlur','Dommasandra','EPIP Zone','Electronic City','Electronic City Phase II','Electronics City Phase 1','Frazer Town','GM Palaya','Garudachar Palya','Giri Nagar','Gollarapalya Hosahalli','Gottigere','Green Glen Layout','Gubbalala','Gunjur','HAL 2nd Stage','HBR Layout','HRBR Layout','HSR Layout','Haralur Road','Harlur','Hebbal','Hebbal Kempapura','Hegde Nagar','Hennur','Hennur Road','Hoodi','Horamavu Agara','Horamavu Banaswadi','Hormavu','Hosa Road','Hosakerehalli','Hoskote','Hosur Road','Hulimavu','ISRO Layout','ITPL','Iblur Village','Indira Nagar','JP Nagar','Jakkur','Jalahalli','Jalahalli East','Jigani','Judicial Layout','KR Puram','Kadubeesanahalli','Kadugodi','Kaggadasapura','Kaggalipura','Kaikondrahalli','Kalena Agrahara','Kalyan nagar','Kambipura','Kammanahalli','Kammasandra','Kanakapura','Kanakpura Road','Kannamangala','Karuna Nagar','Kasavanhalli','Kasturi Nagar','Kathriguppe','Kaval Byrasandra','Kenchenahalli','Kengeri','Kengeri Satellite Town','Kereguddadahalli','Kodichikkanahalli','Kodigehaali','Kodigehalli','Kodihalli','Kogilu','Konanakunte','Koramangala','Kothannur','Kothanur','Kudlu','Kudlu Gate','Kumaraswami Layout','Kundalahalli','LB Shastri Nagar','Laggere','Lakshminarayana Pura','Lingadheeranahalli','Magadi Road','Mahadevpura','Mahalakshmi Layout','Mallasandra','Malleshpalya','Malleshwaram','Marathahalli','Margondanahalli','Marsur','Mico Layout','Munnekollal','Murugeshpalya','Mysore Road','NGR Layout','NRI Layout','Nagarbhavi','Nagasandra','Nagavara','Nagavarapalya','Narayanapura','Neeladri Nagar','Nehru Nagar','OMBR Layout','Old Airport Road','Old Madras Road','Padmanabhanagar','Pai Layout','Panathur','Parappana Agrahara','Pattandur Agrahara','Poorna Pragna Layout','Prithvi Layout','R.T. Nagar','Rachenahalli','Raja Rajeshwari Nagar','Rajaji Nagar','Rajiv Nagar','Ramagondanahalli','Ramamurthy Nagar','Rayasandra','Sahakara Nagar','Sanjay nagar','Sarakki Nagar','Sarjapur','Sarjapur  Road','Sarjapura - Attibele Road','Sector 2 HSR Layout','Sector 7 HSR Layout','Seegehalli','Shampura','Shivaji Nagar','Singasandra','Somasundara Palya','Sompura','Sonnenahalli','Subramanyapura','Sultan Palaya','TC Palaya','Talaghattapura','Thanisandra','Thigalarapalya','Thubarahalli','Thyagaraja Nagar','Tindlu','Tumkur Road','Ulsoor','Uttarahalli','Varthur','Varthur Road','Vasanthapura','Vidyaranyapura','Vijayanagar','Vishveshwarya Layout','Vishwapriya Layout','Vittasandra','Whitefield','Yelachenahalli','Yelahanka','Yelahanka New Town','Yelenahalli','Yeshwanthpur')
Col = np.array(Col_Name)
x=np.zeros(249)
  
@api_view(['POST','GET'])
def predict_home_price(request):
    location = request.POST['location']
    sqft=request.POST['sqft']
    bath=request.POST['bath']
    bhk=request.POST['bhk']
   
    x=np.zeros(249)
    x[0]=sqft
    x[1]=bath
    x[2]=bhk
    if location in Col_Name:
        input_query = np.array([x])
   
    data = input_query
    # Convert input data to a numpy array
    features = [[data['location'], data['sqft'], data['bath'], data['bhk']]]
    # Use the pre-trained
    #  model to predict the home price
    predicted_price = model.predict(features)[0]
    # Save the predicted price to the database
    home_price = HomePrice(location=data['location'], sqft=data['sqft'], bath=data['bath'], bhk=data['bhk'], price=predicted_price)
    home_price.save()
    # Return the predicted price in the response
    return Response({'price': predicted_price})

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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