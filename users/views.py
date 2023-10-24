from django.contrib.auth import get_user_model

from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from .serializers import UserSerializer
from .permissions import IsRequestedUser

from dj_rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client

class UserList(generics.ListAPIView):
    """
    Endpoint to list all users from the database.
    """
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Endpoint to give the details of each user as defined by the primary key passed in.
    """
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsRequestedUser|IsAdminUser]


class GoogleLogin(SocialLoginView):
    """
    Login using a google account. Pass in the clients id_token
    as the necessary field.
    """
    adapter_class = GoogleOAuth2Adapter
    callback_url = "http://localhost:8000/"
    client_class = OAuth2Client
