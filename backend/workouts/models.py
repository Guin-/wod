from django.db import models

class Wod(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500)

    def __unicode__(self):
        return self.name

