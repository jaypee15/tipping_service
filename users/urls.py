from django.urls import path
from .views import MyLoginView

urlpatterns =[
    path('login/', MyLoginView.as_view(), name='login')
]