from django.shortcuts import render
from rest_framework import viewsets
from .models import Wod
from .serializers import WodSerializer

class WodViewSet(viewsets.ModelViewSet):
    queryset = Wod.objects.all()
    serializer_class = WodSerializer

