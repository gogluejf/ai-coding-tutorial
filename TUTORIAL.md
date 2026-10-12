# Build a full-stack web app with AI

Hey Sepi! This tutorial helps you build a webpage that shows people from a CSV file.

**Each numbered step is a separate prompt.** Copy only that step's prompt into your AI assistant. Let it finish, look at what happened, and then move to the next step.

You already code; this guide introduces full-stack web development. The goal is to see how the backend, frontend, and data fit together.

## Keep VS Code open as you work

I encourage you to keep **VS Code open on your project folder throughout the tutorial**. Watch which files are created and how the code changes at each step.

You can open the folder through **File → Open Folder**, or ask your AI coding assistant (the tool running these prompts):

```text
Open this project folder in VS Code so I can inspect the files and changes.
```

In VS Code, open **Source Control** to see changed files. Click a changed file to view its diff: the lines added and removed. New, untracked files may need to be opened directly to read their contents.

## Commit when you are satisfied with a step

After each step that changes files, check the result and review the changes in VS Code. Once you are satisfied, I encourage you to send this extra prompt **before moving to the next step**:

```text
I am satisfied with this step. Review the changes, make sure generated
folders and secrets are excluded, and commit the files for this step
with a short, clear message. Do not push.
```

A commit saves a local checkpoint of your code so you can review or return to it later. Explanation-only steps do not need a commit if no files changed. After the first commit, later changes are easier to compare against that checkpoint.

## Before you begin

Choose an AI coding assistant: **Codex, Claude Code, or Squid-OS**. Install it using its official instructions, then follow its sign-in or provider setup.

- **Codex:** sign in with your OpenAI/ChatGPT account if your plan supports Codex access.
- **Claude Code:** use its supported Anthropic sign-in or API access. An OpenAI subscription does not provide Claude access.
- **Squid-OS:** [github.com/gogluejf/squid-os](https://github.com/gogluejf/squid-os) — configure a supported provider. If your installed version offers OpenAI subscription sign-in, follow that setup; otherwise use a supported API connection. If you go the skill route, you will need to compile it following the instructions in the repo.

A ChatGPT subscription and paid API access are not the same thing. Check the tool's access requirements before paying for anything. Enter credentials only through the tool's secure setup, not in a prompt or project file.

Create an empty folder named `people-directory` and open your coding assistant in that folder. This is where it will create your app. Keep it separate from the folder containing this tutorial.

Send this introduction first:

```text
I already code, but I am new to building full-stack web apps.
Help me build a small full-stack web app one step at a time.
Keep the code and your explanations very basic and simple.

Only work on the step I ask for. Explain briefly what you changed.
Before running commands, explain what they do. If I must run a command,
tell me which folder and terminal to use and what success looks like.

Help me check that Python 3, Node.js LTS, npm, and Git are installed.
Ask which operating system I use if you cannot tell.

Do not commit or push unless I ask. Do not put secrets in project files.
```

**Notice:** your assistant should help you get ready before building the app.

## 1. Initialize Git

**Intent:** prepare your folder so Git can track changes to the project.

```text
Can you initialize Git in this project folder and add an appropriate
.gitignore? Explain what Git does in two simple sentences.
Do not create a commit yet.
```

**Notice:** a `.gitignore` file appears. It tells Git which files to leave out. Initializing Git does not upload anything to the internet.

## 2. Build the backend

**Intent:** create a small server that reads a file and sends back data.

```text
Can you build a basic Python API server using FastAPI and pandas?
Keep it simple. NumPy is optional; do not add it unless we need it.

Put it in a backend folder. Use main.py with a FastAPI object named app,
a requirements.txt file, and a Python virtual environment named .venv.

Create a CSV file with 10 fictional records. Give it these columns:
name, email, birthday. Use example.com emails and YYYY-MM-DD birthdays.

Create one application endpoint: GET /people. Read the CSV on each
request and return the records as a JSON array.

Show me how to install the dependencies and start the server on port
8000. Tell me how to open http://localhost:8000/people to check it works.
```

**Notice:** look at the CSV and its 10 rows. Open the endpoint in your browser: you should see data, not a designed webpage. Leave the backend running.

## 3. Build the frontend

**Intent:** turn the data into a webpage you can read easily.

```text
Can you build a simple React frontend using Vite and npm in a frontend
folder? Use JavaScript, not TypeScript.

Fetch the data from http://localhost:8000/people and display it in a
simple table with name, email, and birthday columns. Include a basic
loading message and an error message if the request fails.

Configure the backend to allow browser requests from
http://localhost:5173. Briefly explain why this is needed.

Show me how to install the frontend dependencies and run Vite on port
5173 with strictPort so it does not silently switch ports.
Tell me how to run it in a second terminal while the backend keeps running.
```

**Notice:** open http://localhost:5173. The same people should now appear in a table. Two terminals are running: one for the data server and one for the webpage server.

## 4. Find your way around

**Intent:** understand the addresses and files you now have.

```text
What are my two server addresses: backend and frontend?
Which address shows the webpage, and which URL shows the people data?

Show the important files we created and explain each in one short
sentence. Skip generated folders like node_modules and .venv.
```

**Notice:** compare the assistant's file list with your project folder. Find the CSV, backend code, and frontend code.

## 5. Understand FastAPI

**Intent:** learn what the backend tool does.

```text
What is FastAPI? Explain in simple words using our project as the
example. Keep it short and do not overwhelm me.
```

**Notice:** find the backend code that handles `/people` and connect it to the response you saw in your browser.

## 6. Understand Vite

**Intent:** learn what starts the frontend during development.

```text
What is Vite? Explain in simple words using our project as the example.
How is it different from React? Keep it short and do not overwhelm me.
```

**Notice:** Vite runs the frontend development server. React is used to build what you see on the page.

## 7. Understand your endpoint

**Intent:** see how the frontend asks for data and what it receives.

```text
What is my API endpoint signature? Show its HTTP method, URL, and
whether it needs any inputs. Explain those words simply.

Show a valid example JSON response with two people, using the same
field names as our app. Briefly explain how React uses this data.
```

**Notice:** compare the JSON field names with the CSV columns and the webpage table. They describe the same information.

## 8. Add a city

**Intent:** make a small change and follow it from the file to the webpage.

```text
Change the existing CSV file: add a new column named city and fill it
with sample city values for all 10 people. Do not create a separate CSV.

Update the backend if needed, and update the frontend table to display
the city. Keep it simple. Explain which files changed and why.

Tell me whether I need to restart anything and how to check the result.
```

**Notice:** check the city in three places: the CSV, http://localhost:8000/people, and the webpage. Try changing one city yourself, save the CSV, and refresh the webpage.

## 9. Make the CSS pretty

**Intent:** alter the visual look of the React page while it runs live in your browser.

```text
Make the CSS pretty for the website. Use a modern dark theme.
Keep it simple — just update the CSS file, do not change the data
or table structure.
```

**Notice:** keep your browser open on http://localhost:5173 and the Vite server running. As soon as the assistant saves the CSS file, you will see the page change live in your browser — no refresh needed. This is hot-reload: Vite watches your files and pushes updates instantly.

## If you get stuck

Stay on the current step and send this prompt with the error message:

```text
I am stuck on this step. Here is what I tried and the error I saw.
Explain the problem simply and help me fix it before we move on:

[paste what you tried and the error here — no passwords or secret keys]
```

## You built it!

You started with an empty folder, created a backend and a frontend, and changed the data shown on a webpage.

The main idea is simple: **the file stores the data, the backend serves it, and the frontend displays it.**

Press `Ctrl+C` in each server terminal when you are done.
