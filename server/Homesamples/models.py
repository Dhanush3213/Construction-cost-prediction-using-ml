from django.db import models

class HomeSample(models.Model):
    image = models.ImageField(upload_to='homesamples/')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.pk}: ${self.price}'