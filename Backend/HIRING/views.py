from rest_framework import viewsets
from .models import Candidate, Candidate_Stage, Stage
from .serializers import CandidateSerializer, CandidateStageSerializer, StageSerializer


# Create your views here.
class CandidateView(viewsets.ModelViewSet):
    """
    Return a list of all Candidates.
    """

    queryset = Candidate.objects.all().order_by("id")
    serializer_class = CandidateSerializer


class StageView(viewsets.ModelViewSet):
    """
    Return a list of all Stages.
    """

    queryset = Stage.objects.all().order_by("id")
    serializer_class = StageSerializer


class CandidateStageView(viewsets.ModelViewSet):
    """
    Return a list of all Candidates and the Stages they are in.
    """

    queryset = Candidate_Stage.objects.all().order_by("id")
    serializer_class = CandidateStageSerializer
