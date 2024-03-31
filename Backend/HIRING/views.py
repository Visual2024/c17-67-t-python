from rest_framework import viewsets
from .models import Candidate, Candidate_Stage, Stage
from .serializers import CandidateSerializer, CandidateStageSerializer, StageSerializer


# Create your views here.
class CandidateView(viewsets.ModelViewSet):
    queryset = Candidate.objects.all().order_by("id")
    serializer_class = CandidateSerializer


class StageView(viewsets.ModelViewSet):
    queryset = Stage.objects.all().order_by("id")
    serializer_class = StageSerializer


class CandidateStageView(viewsets.ModelViewSet):
    queryset = Candidate_Stage.objects.all().order_by("id")
    serializer_class = CandidateStageSerializer
