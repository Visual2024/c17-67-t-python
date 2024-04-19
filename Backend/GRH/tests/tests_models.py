from django.test import TestCase
from ..models import CustomUser, Role, Team, Postulant, Stage, Vacancy, SelectionProcess

# Create your tests here.


class CustomUserTestCase(TestCase):
    def setUp(self):
        self.user = CustomUser.objects.create_user(
            email="uXbUH@example.com",
            password="password",
        )

    def test_user_creation(self):
        self.assertEqual(self.user.email, "uxbuh@example.com")
        self.assertTrue(self.user.check_password("password"))
