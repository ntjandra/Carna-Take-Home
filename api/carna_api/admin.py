from import_export.admin import ImportExportModelAdmin
from django.contrib import admin
# from django.contrib.auth.admin import UserAdmin
from .models import Course #, Questions, CarnaUser


# Site Admins can manage Users and Courses.

# Users have first_name, last_name, bio
# class UserAdmin(admin.ModelAdmin):
#     list_display = ('first_name','last_name','bio', 'is_teacher', 'is_student')

class CourseAdmin(ImportExportModelAdmin):
    # Display Courses
    list_display = ('id', 'creator_id', 'title', 'release_date', 'description', 'stars', 'topic')

# admin.site.register(CarnaUser, UserAdmin)
admin.site.register(Course, CourseAdmin)