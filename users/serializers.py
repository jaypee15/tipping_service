from django.contrib.auth import get_user_model
from rest_framework import serializers


from django_countries.serializers import CountryFieldMixin




class UserSerializer(CountryFieldMixin, serializers.ModelSerializer):
 
    class Meta:
        model = get_user_model()
        fields = ('first_name', 'last_name', 'email', 'username', 'avatar', 'cover_img', 'country', 'bio',)


    
