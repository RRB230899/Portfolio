#!/bin/bash
echo "BUILD STARTED"

# Upgrade pip & install dependencies
python -m pip install --upgrade pip
pip install -r requirements.txt

# Collect static files
python manage.py collectstatic --noinput

echo "BUILD ENDED"
