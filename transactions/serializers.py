from rest_framework import serializers

from .models import Transaction

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ("id", "creator", "amount","payment_method","timestamp", "supporter_email")
        
