# from rest_framework import serializers

# from . import services
# from .models import User
# from django_countries.serializers import CountryFieldMixin


# class UserSerializer(CountryFieldMixin, serializers.ModelSerializer):
 
    
#     class Meta:
#         model = User
#         fields = ('first_name', 'last_name', 'email', 'display_name', 'avatar', 'cover_img', 'country', 'bio', 'follows')

#     def to_internal_value(self, data):
#         data = super().to_internal_value(data)

#         return services.UserDataClass(**data)
    
