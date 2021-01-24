#!/bin/sh

# delete old migrations
rm -rf migrations

# Prepare DB
echo "Preparing DB....."
flask db init && flask db migrate && flask db upgrade

# Run
flask run --with-threads --host=0.0.0.0 
# cat ${FLASK_APP}
echo "Runnning ptvsd on port 5678"
# python -m ptvsd --host 0.0.0.0 --port 5678 ${FLASK_APP}
