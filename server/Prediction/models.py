from django.db import models

# Create your models here.
class HomePrice(models.Model):
    location = models.CharField(max_length=300)
    sqft = models.FloatField()
    bath = models.FloatField()
    bhk = models.IntegerField()
    price = models.FloatField()

    def __str__(self):
        return f"{self.location} location, {self.sqft} sqft, {self.bath} bath, {self.bhk}: ${self.price}"
