# Build a full-stack web app with AI

Hey Sepi, I set up this project to help you explore full-stack web development with AI, one step at a time. You already code; this guide focuses on connecting a backend, a frontend, and data.

The idea is simple: a webpage that shows a list of fictional people from a CSV file. A CSV is a simple table saved as a text file.

**The most important part is [TUTORIAL.md](TUTORIAL.md).** It gives you separate prompts to send to your AI coding assistant. Each step explains the intent and what to notice before moving on. You will build the project yourself while watching what changes.

## What this repository contains

- `README.md` — this introduction and the intended installation and run instructions.
- `TUTORIAL.md` — the step-by-step prompts for building your own version.
- **Coming later:** a working proof of concept you can run and compare with your version. Your AI may generate different code that does the same thing.

For now, this repository contains documentation only. There is no application to install or run yet.

## What you will build

A small app with two parts:

- **Backend:** Python, FastAPI, and pandas read the CSV and return the people as data.
- **Frontend:** React and Vite display those people in a webpage.

The flow is: **CSV file → backend → frontend → webpage.**

You do not need to understand those tools before starting. The tutorial includes prompts to learn about them.

## Start learning

Open [TUTORIAL.md](TUTORIAL.md), choose an AI coding assistant, and send **one prompt at a time**.

Use a separate empty folder for your own version, such as `people-directory`. That keeps your work separate from this guide and the future example code.

## Install and run the example — once it exists

**These are the planned commands, not commands you can run against this repository yet.** The example code will need to follow this layout. If you are following the tutorial instead, use the instructions your assistant gives you for its generated code.

You will need Python 3, Node.js LTS (which includes npm), and Git. A terminal is the window where you type commands. Ask your assistant to help install these for your operating system if needed.

### 1. Start the backend

Open a terminal in the project folder. On Linux or macOS:

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
python -m uvicorn main:app --reload --port 8000
```

On Windows PowerShell:

```powershell
cd backend
py -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python -m uvicorn main:app --reload --port 8000
```

The virtual environment (`.venv`) keeps this project's Python packages together. If Windows blocks activation, ask your assistant for help and include the error message.

Leave this terminal running. The planned data address is http://localhost:8000/people.

### 2. Start the frontend

Open a **second terminal in the project folder**:

```bash
cd frontend
npm install
npm run dev -- --port 5173 --strictPort
```

Leave this terminal running too. Open http://localhost:5173 in your browser to see the webpage.

`localhost` means your own computer. The different port numbers let both servers run on it at the same time.

### 3. Stop the app

Press `Ctrl+C` in each terminal.

Next time, you can skip creating the virtual environment and installing packages unless the dependencies have changed. Activate the Python environment again, then start both servers.

## The goal

Keep VS Code open to review the files and diffs as you work. Follow how each server works and how a change to the CSV reaches the webpage. When you are satisfied with a step, ask your assistant to commit it as a local checkpoint.

If something fails, copy the error into your AI assistant and ask it to explain and fix it simply. Never paste passwords or secret keys.
