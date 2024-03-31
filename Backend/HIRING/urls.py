from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from HIRING import views


# API Versioning
router = routers.DefaultRouter()
router.register(r"candidate", views.CandidateView, "candidates")
router.register(r"stage", views.StageView, "stages")
router.register(r"candidate_stage", views.CandidateStageView, "candidate_stages")
# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.

urlpatterns = [
    path("api/v1/", include(router.urls)),
]
