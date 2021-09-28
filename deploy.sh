#!/usr/bin/env sh
# abort on errors
set -e
yarn run build
cd dist
git init
git checkout -b gh-pages
git add -A
git commit -m 'deploy'
git push -f https://github.com/TEDmk/vue-prototype.git gh-pages
cd -