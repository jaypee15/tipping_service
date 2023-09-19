from django.contrib.auth import get_user_model

from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from .serializers import UserSerializer
from .permissions import IsRequestedUser

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
