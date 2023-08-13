from django.db import models
from users.models import CustomUser

class TransactionHistory(models.Model):
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_method = models.CharField(max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True)
    creator = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    supporter_email = models.EmailField(null=False, blank=False)
   

    def __str__(self) -> str:
        return f'{self.amount} from {self.supporter_email} to {self.creator}'
    
    class Meta:
        ordering = ['-timestamp']