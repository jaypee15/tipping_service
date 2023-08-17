from django.urls import path
from .views import ListTransactionAPIView,CreateTransactionAPIView


urlpatterns = [
   path('', ListTransactionAPIView.as_view(), name='list'),
   path('create', CreateTransactionAPIView.as_view(), name='create')
]