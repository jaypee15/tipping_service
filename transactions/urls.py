from django.urls import path
from .views import ListTransactionAPIView,DetailTransactionAPIView


urlpatterns = [
   path('transactions/', ListTransactionAPIView.as_view(), name='transaction_list'),
   path('transactions/<int:pk>', DetailTransactionAPIView.as_view(), name='transaction_detail'),
]