from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from .models import CustomUser
from .models import Profile

class CustomAuthenticationForm(AuthenticationForm):
    email = forms.EmailField(widget=forms.TextInput(attrs={'autofocus': True}))

class RegisterForm(UserCreationForm):
    email = forms.EmailField(max_length=255, required=True)

    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'password1', 'password2',)

class UserUpdateForm(forms.ModelForm):
    class Meta:
        model = CustomUser
        fields = ['email']

class ProfileUpdateForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields =['avatar']
