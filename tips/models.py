from django.db import models
from django.conf import settings

class TransactionHistory(models.Model):
    creator = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_method = models.CharField(max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True)
    supporter_email = models.EmailField(null=False, blank=False)
   

    def __str__(self) -> str:
        return f'{self.amount} from {self.supporter_email} to {self.creator}'
    
    class Meta:
        ordering = ['-timestamp']