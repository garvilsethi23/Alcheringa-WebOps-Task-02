
from django.shortcuts import render, redirect, get_object_or_404
from .models import User
from .forms import UserForm, UserUpdateForm
import requests
from django. contrib import messages


def register (request):
    users = User.objects.all()  # Query all users from the database
    form = UserForm() 
    if request.method == 'POST':
        form = UserForm(request. POST)
    if form.is_valid():
        form.save ()
        username = form.cleaned_data.get ('username') 
        messages. success (request, f'Account created for {username}!')
        return redirect ('register')
    else:
        form = UserForm ()
    return render (request, 'index.html', {'form': form,'users': users})



def delete_user(request, pk):
    user = get_object_or_404(User, pk=pk)
    if request.method == 'POST':
        user.delete()
        messages.success (request, f'Account deleted!') 
        return redirect('register') 
    return render(request, "index.html", {'user': user})

def edit_user(request, pk):
    user = get_object_or_404(User, pk=pk)
    if request.method == 'POST':
        form = UserForm(request.POST, instance=user)
        if form.is_valid():
            form.save()
            messages.success (request, f'Information updated!') 
            return redirect('register') 
    else:
        form = UserForm(instance=user)
    
    return render(request, 'edit_user.html', {'form': form})
 