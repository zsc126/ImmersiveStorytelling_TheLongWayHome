@echo off
title The Long Way Home - local server
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0tools\server.ps1"
pause
