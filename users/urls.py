from django.urls import path

from .views import UserDetail, UserList

urlpatterns = [
    path("users", UserList.as_view(), name="user_list"),
    path("users/<int:pk>", UserDetail.as_view(), name="user_detail"),

    
]