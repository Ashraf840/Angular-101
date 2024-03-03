from django.urls import path
from .views import roomList


urlpatterns = [
    path('room-list/', roomList, name='roomList'),
]
