from rest_framework import permissions
from rest_framework.generics import ListAPIView, CreateAPIView

from .models import TransactionHistory
from users.models import User
from .serializers import TransactionsSerializer, MyPageSerializer
from users import authentication

class ListTransactionAPIView(ListAPIView):
    """This endpoint list all the users transactions from the database"""
    authentication_classes = (authentication.CustomUserAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    queryset = TransactionHistory.objects.all()
    serializer_class = TransactionsSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset.filter(creator = self.request.user)

class CreateTransactionAPIView(CreateAPIView):
    """This endpoint allows for creation of a transaction"""
    authentication_classes = (authentication.CustomUserAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    queryset = TransactionHistory.objects.all()
    serializer_class = TransactionsSerializer

class MyPageAPiView(ListAPIView):
    """Endpoint to display users page"""


    queryset = User.objects.all()
    serializer_class = MyPageSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset.filter(display_name = self.request.pk)
    
    
