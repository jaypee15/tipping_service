from django.contrib import admin 
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserChangeForm, CustomUserCreationForm
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ["email", "username", "is_staff"]
    fieldsets = UserAdmin.fieldsets + (("Images", {"fields": ("avatar", "cover_img")}), ("Bio", {"fields": ("bio","country")}),)
    add_fieldsets = UserAdmin.add_fieldsets + (("Images", {"fields": ("avatar", "cover_img")}), ("Bio", {"fields": ("bio", "country")}),)


admin.site.register(CustomUser, CustomUserAdmin)