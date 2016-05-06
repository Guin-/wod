from django.conf.urls import include, url
from rest_framework import routers

from workouts.views import WodViewSet

router = routers.DefaultRouter()
router.register(r'workouts', WodViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
