from django.test import TestCase
from django.contrib.auth import get_user_model

from djmoney.money import Money

from .models import Transaction

class TransactionTest(TestCase):
    @classmethod
    def setUpTestData(cls) -> None:
        cls.user = get_user_model().objects.create_user(
            username = "testuser",
            email = "test@email.com",
            password = "secret",
        )

        cls.transaction = Transaction.objects.create(
            creator = cls.user,
            amount = 1000,
            supporter_email = "testsupporter@email.com"
        )

    def test_transaction_model(self):
        self.assertEqual(self.transaction.creator.username, "testuser")
        self.assertEqual(self.transaction.amount,  Money('1000', 'NGN'))
        self.assertEqual(self.transaction.supporter_email, "testsupporter@email.com")
        self.assertEqual(str(self.transaction), "NGN1,000.00 from testsupporter@email.com to testuser") 
