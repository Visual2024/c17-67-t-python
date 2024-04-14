from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import RegisterPostulantViewSet

# Instantiate the router
router = DefaultRouter()


# API Versioning
router.register(r"Postulants", RegisterPostulantViewSet, "Postulantes")

urlpatterns = [
    path("api/v1/", include("router.urls")),
]
