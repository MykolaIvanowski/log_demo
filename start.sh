#!/bin/sh

# Start Nginx
nginx

# Start Python app
gunicorn -w 2 -b 0.0.0.0:8080 server:app
