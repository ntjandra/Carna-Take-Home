from django.contrib import admin

# Register your models here.
from .models import Course

class CourseAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

# Register your models here.

admin.site.register(Course, CourseAdmin)