#!/bin/bash
# delete old migrations
rm -rf migrations

# Prepare DB
flask db init && flask db migrate && flask db upgrade

# Run
flask run --with-threads --host=0.0.0.0 
