#!/bin/bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Collect static files
python manage.py collectstatic --noinput

# 3. Make sure STATIC_ROOT is inside output folder for Vercel
mkdir -p output/static
cp -r staticfiles/* output/static/

# 4. Any other setup if needed
