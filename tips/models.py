from django.db import models
from django.utils import  timezone
from django.contrib.auth.models import User

class TransactionHistory(models.Model):
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_method = models.CharField(max_length=255)
    timestamp = models.DateTimeField(default=timezone.now)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    supporter_email = models.EmailField(null=False, blank=False)
   

    def __str__(self) -> str:
        return f'{self.amount} from {self.supporter_email} to {self.creator}'
    
    class Meta:
        ordering = ['-timestamp']