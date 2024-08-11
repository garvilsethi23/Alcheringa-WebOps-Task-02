from django.contrib import admin
from .models import User  # Import your model

class UserAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'username', 'email')  # Customize fields to display in list view

admin.site.register(User, UserAdmin)  # Register the model with the custom admin class
