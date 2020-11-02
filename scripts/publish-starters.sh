#!/bin/bash

# usage: ./publish-starters.sh starters
FOLDER="starters"
BASE=$(pwd)
COMMIT_MESSAGE=$(git log -1 --pretty=%B)

git config --global user.email "laneolson@gmail.com"
git config --global user.name "$GITHUB_USERNAME"

for folder in $FOLDER/*; do
  [ -d "$folder" ] || continue # only directories
  cd $BASE

  NAME=$(cat $folder/package.json | jq -r '.name')
  CLONE_DIR="__${NAME}__clone__"
  
  # sync to read-only clones

  # clone, delete files in the clone, and copy (new) files over
  # this handles file deletions, additions, and changes seamlessly
  git clone --depth 1 https://$API_TOKEN_GITHUB@github.com/Hyperobjekt/$NAME.git $CLONE_DIR
  cd $CLONE_DIR
  find . | grep -v ".git" | grep -v "^\.*$" | xargs rm -rf # delete all files (to handle deletions in monorepo)
  cp -r $BASE/$folder/. .

  git add .
  git commit --message "$COMMIT_MESSAGE"
  git push origin main
  
  cd $BASE
done