
from django.contrib import admin
from django.urls import path
from django.urls.conf import include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("API.urls"), name="API"),
    path('api/', include("Prediction.urls"), name="Prediction"),
    path('', include('django.contrib.auth.urls')),
]
