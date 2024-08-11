from django.urls import path
from .views import register
from .import views


urlpatterns = [
    path('', register, name='register'),
    path('delete-user/<int:pk>/', views.delete_user, name='delete_user'),
    path('edit-user/<int:pk>/', views.edit_user, name='edit_user'),
]
