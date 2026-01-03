#!/bin/bash

URL="https://xgmorzggraxpdewbbozs.supabase.co"
ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnbW9yemdncmF4cGRld2Jib3pzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczNzgxMjQsImV4cCI6MjA4Mjk1NDEyNH0.gl3PaNp2gdNh_gfsIsbH5SgDpVN02O9dhit_0UxUmRw"

# Call the seed endpoint
curl -s "$URL/functions/v1/seed-documents" \
  -H "Authorization: Bearer $ANON_KEY" \
  -H "Content-Type: application/json" \
  -d '{"force": true}'
