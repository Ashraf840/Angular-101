from django.urls import path
from .views import get_roomList, add_roomList


urlpatterns = [
    path('room-list/', get_roomList, name='get_roomList'),
    path('room-create/', add_roomList, name='add_roomList'),
]
