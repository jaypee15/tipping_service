from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from .models import Transaction
from .serializers import TransactionSerializer
from .permissions import IsOwnerOnly



class ListTransactionAPIView(generics.ListCreateAPIView):
    """
    This endpoint list all the users transactions from the database
    and also allows for the creation of new transactions.
    """
 
    permission_classes = [IsOwnerOnly]
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

    # def get_queryset(self):
    #     queryset = super().get_queryset()
    #     return queryset.filter(creator = self.request.user)

class DetailTransactionAPIView(generics.RetrieveAPIView):
    """
    This endpoint shows in detail a particular transaction as determined by the 
    primary key passed in.
    """
    # authentication_classes = (authentication.CustomUserAuthentication,)

    
    permission_classes = [IsOwnerOnly|IsAdminUser]
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

    
    
