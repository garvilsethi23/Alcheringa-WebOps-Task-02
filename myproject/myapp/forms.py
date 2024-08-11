
from django import forms
from .models import User


class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['full_name', 'username', 'email']

class UserUpdateForm( forms. ModelForm) :
    email = forms.EmailField ()
    
    class Meta:
        model = User
        fields = ['username', 'email']