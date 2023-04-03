from rest_framework import serializers
from .models import HomeSample

class HomeSampleSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = HomeSample
        fields = ['id', 'predicted_price', 'image_url']

    def get_image_url(self, obj):
        return self.context['request'].build_absolute_uri(obj.image.url)
