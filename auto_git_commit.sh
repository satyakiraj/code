#!/bin/bash

# Directory to watch for new files/folders
WATCHED_DIR="/home/satyakithecoder/code"

# Change to the watched directory
cd $WATCHED_DIR

# Check if there are any new files/folders
NEW_FILES=$(git ls-files --others --exclude-standard)

if [ -n "$NEW_FILES" ]; then
    # Add new files to staging
    git add .

    # Commit with a message
    git commit -m "Automatically adding new files/folders in $WATCHED_DIR"
else
    echo "No new files or folders to add."
fi
