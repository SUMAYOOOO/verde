#!/bin/bash
# Requires Railway CLI and authenticated user
cd backend
railway up --service sumayo-backend --detach || true
cd ../frontend
railway up --service sumayo-frontend --detach || true
echo "Triggered Railway deploys (check your Railway dashboard)."
