from rest_framework import serializers

from .models import Transaction

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ("id", "creator", "amount","payment_method","timestamp", "supporter_email")
        
class CryptoSerializer(serializers.Serializer):
    name = serializers.CharField()
    description = serializers.CharField()
    local_price_amount = serializers.DecimalField(max_digits=10, decimal_places=2)
    local_price_currency = serializers.CharField()
    pricing_type = serializers.CharField()
    redirect_url = serializers.URLField()
    cancel_url = serializers.URLField()
