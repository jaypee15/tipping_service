from django.db import models
from django.conf import settings
from djmoney.models.fields import MoneyField

class TransactionHistory(models.Model):
    
    PAYMENT_CHOICES =[
        ('Bank Transfer', 'Bank Transfer'),
        ('Card Payment', 'Card Payment'),
        ('Cypto', 'CryptoCurrency'),
    ]
    creator = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.DO_NOTHING)
    amount = MoneyField(max_digits=19, decimal_places=4, default_currency='NGN')
    payment_method = models.CharField(max_length=140, choices=PAYMENT_CHOICES, default='Bank Transfer') 
    timestamp = models.DateTimeField(auto_now_add=True)
    supporter_email = models.EmailField(null=False, blank=False)
   

    def __str__(self) -> str:
        return f'{self.amount} from {self.supporter_email} to {self.creator}'
    
    class Meta:
        ordering = ['-timestamp']