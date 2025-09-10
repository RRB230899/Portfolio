echo "BUILD STARTED"

# 1. Use venv to isolate environment
python3 -m venv venv
source venv/bin/activate

# 2. Upgrade pip
python -m pip install --upgrade pip

# 3. Install requirements
pip install -r requirements.txt

# 4. Collect static files
python manage.py collectstatic --noinput

echo "BUILD ENDED"
