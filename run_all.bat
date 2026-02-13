@echo off
start http-server --port 2222
start node "./backend/backend.mjs"
rem start npx tailwindcss -i ./frontend/styles/all_styles.css -o ./frontend/styles/tailwind.css --watch
timeout /t 2 >nul
start "" http://127.0.0.1:2222"