from django.urls import path
from .views import ListTransactionAPIView,CreateTransactionAPIView


urlpatterns = [
   path('dashboard', ListTransactionAPIView.as_view(), name='dashboard'),
   path('create', CreateTransactionAPIView.as_view(), name='create')
]