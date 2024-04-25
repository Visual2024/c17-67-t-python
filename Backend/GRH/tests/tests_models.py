from django.test import TestCase
from GRH.models import *


# Create your tests here.
class CustomUserTestCase(TestCase):
    def setUp(self):
        self.user = CustomUser.objects.create(
            email="HxqJg@example.com",
            password="TestpaSSword",
            first_name="Test",
            last_name="User",
            is_staff=True,
            is_active=True,
            is_superuser=True,
        )

    def test_user_creation(self):
        self.assertIsInstance(self.user, CustomUser)
        self.assertEqual(self.user.email, "HxqJg@example.com")
        self.assertEqual(self.user.password, "TestpaSSword")
        self.assertEqual(self.user.first_name, "Test")
        self.assertEqual(self.user.last_name, "User")
        self.assertEqual(self.user.is_staff, True)
        self.assertEqual(self.user.is_active, True)
        self.assertEqual(self.user.is_superuser, True)
