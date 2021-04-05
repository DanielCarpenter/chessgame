from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='chessgame-home'),
    path('<str:lobby_name>/', views.lobby, name='lobby'),
]
