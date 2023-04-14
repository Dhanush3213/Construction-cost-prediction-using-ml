from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class HomePrice(models.Model):
    location = models.CharField(max_length=300)
    sqft = models.FloatField()
    bath = models.FloatField()
    bhk = models.IntegerField()
    price = models.FloatField()

    def __str__(self):
        return f"{self.location} location, {self.sqft} sqft, {self.bath} bath, {self.bhk}: ${self.price}"


# Create your models here.


class JWT(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    access = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-user']

    def __str__(self):
        return self.user.username