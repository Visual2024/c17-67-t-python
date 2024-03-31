from rest_framework import serializers
from .models import Candidate, Stage, Candidate_Stage


class CandidateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        fields = (
            "id",
            "first_name",
            "last_name",
            "email",
            "phone_number",
            "postulation_date",
            "dni",
            "stages",
        )
        read_only_fields = ("created_at",)


class StageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stage
        fields = ("name", "description", "start_date")
        read_only_fields = ("start_date",)


class CandidateStageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate_Stage
        fields = (
            "candidate",
            "start_date",
            "end_date",
            "status",
        )
        read_only_fields = ("start_date",)
