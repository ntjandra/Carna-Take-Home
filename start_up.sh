#!/bin/bash

home=$(pwd)

cd $home/api
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver &
cd $home/frontend
npm install
npm start
cd $home
