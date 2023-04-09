
from django.contrib import admin
from django.urls import path
from django.urls.conf import include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/', include("account.urls"), name="account"),
    path('', include("Prediction.urls"), name="Prediction"),
    path('home/', include("Homesamples.urls"), name="Homesamples"),
    path('chat/', include("Chatbot.urls"), name="Chatbot"),
    path('', include('django.contrib.auth.urls')),
]
