#!/bin/sh
# Rebuild site/app.js from src/ (needs `npm install` once: three@0.169.0 + esbuild)
ESB=${ESB:-node_modules/esbuild/bin/esbuild}
$ESB src/main.js --bundle --minify --format=iife --target=es2020 --legal-comments=none \
  --banner:js="/*! The Long Way Home V3. Includes three.js (MIT License). */" \
  --outfile=site/app.js
