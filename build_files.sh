#!/bin/bash
# Exit immediately if a command exits with a non-zero status
set -e

# Clean previous build
rm -rf .vercel/output

# Create output folder
mkdir -p .vercel/output

# Collect static files into output folder
python manage.py collectstatic --noinput

# Copy Django project and apps to output folder
cp -r portfolio .vercel/output/
cp -r personal_portfolio .vercel/output/

# Copy wsgi.py to the output folder (Vercel Lambda entry point)
cp portfolio/wsgi.py .vercel/output/

# Copy any other necessary files (optional)
cp manage.py .vercel/output/
