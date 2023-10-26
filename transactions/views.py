from rest_framework import generics, views
from rest_framework.permissions import IsAdminUser

from .models import Transaction
from .serializers import TransactionSerializer, CryptoSerializer
from .permissions import IsOwnerOnly

from coinbase_commerce.client import Client
from django.shortcuts import render

from core import settings




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

    
    

class CryptoView(views.APIVIEW):

    def post(self, request):
        serializer = CryptoSerializer(data=request.data)
        if serializer.is_valid():
            # Extract validated data
            data = serializer.validated_data
            
            client = Client(api_key=settings.COINBASE_COMMERCE_API_KEY)
            domain_url = 'http://localhost:8000/'
            product = {
                'name': 'Coffee',
                'description': 'A really good local coffee.',
                'local_price': {
                    'amount': '5.00',
                    'currency': 'USD'
                },
                'pricing_type': 'fixed_price',
                'redirect_url': domain_url + 'success/',
                'cancel_url': domain_url + 'cancel/',
            }
            charge = client.charge.create(**product)

            return render(request, 'home.html', {
                'charge': charge,
            })