from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from .rooms_data import room_list


@api_view(http_method_names=["GET"])
def get_roomList(request:Request):
    rooms = room_list
    return Response(data=rooms, status=status.HTTP_200_OK)


@api_view(http_method_names=["POST"])
def add_roomList(request:Request):
    # print("POST id:", request.data.get('id'))
    id = request.data.get('id')
    roomType = request.data.get('roomType')
    amenities = request.data.get('amenities')
    price = request.data.get('price')
    picture = request.data.get('picture')
    checkinTime = request.data.get('checkinTime')
    checkoutTime = request.data.get('checkoutTime')
    room_list.append(
        {
            "id": f"{id}",
            "roomType": f"{roomType}",
            "amenities": f"{amenities}",
            "price": price,
            "picture": f"{picture}",
            "checkinTime": f"{checkinTime}",
            "checkoutTime": f"{checkoutTime}"
        }
    )
    print(request.data)
    return Response(data=room_list, status=status.HTTP_201_CREATED)
