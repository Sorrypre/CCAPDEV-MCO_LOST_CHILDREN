@echo off
start http-server --port 2222
start node "./backend/backend.mjs"
start npx tailwindcss -i ./frontend/styles/main_style.css -o ./frontend/styles/tailwind.css --watch
start "" http://127.0.0.1:2222"