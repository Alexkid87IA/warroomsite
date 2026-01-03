#!/bin/bash

# Execute inserts 2-17
for i in 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19; do
  echo "Executing insert $((i-2))/17..."
  sed -n "${i}p" scripts/seed.sql
  echo
done
