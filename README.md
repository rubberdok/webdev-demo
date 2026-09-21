<h1 align="center">Web Development Crash Course</h1>
<p align="center">
  <a href="https://github.com/rubberdok">
    <img
      alt="Logo"
      title="Rubberdøk"
      width="300"
      src="https://raw.githubusercontent.com/rubberdok/indok-web/a7879ae8721dd9d4acddeabb45decefee3273083/rubberdok_logo.svg"
    >
  </a>
</p>
<h3 align="center">
  Hosted by <a href="https://github.com/rubberdok"><em>Rubberdøk</em></a>
</h3>

Demo repo used in crash course for students learning web development. Contains a basic React frontend and Django backend for creating and showing todos.

**Table of Contents**

- [Preparation](#preparation)
  - [React demo](#react-demo)
  - [Django demo](#django-demo)
  - [VSCode](#vscode)
- [Repo contents](#repo-contents)

## Preparation

Following these steps prepares you to join the interactive demos of the crash course. If you have any trouble with the preparation, please [file an issue](https://github.com/rubberdok/webdev-demo/issues/new).

### React demo

1. Download and install `Node.js` from https://nodejs.org/en/
   - Select the "Recommended For Most Users" option
2. Find the **terminal** on your computer
   - Mac: `Terminal`
   - Windows: `Powershell` / `Command Prompt` / `Windows Terminal`
3. Open the terminal, and check that Node was installed correctly by typing `npm --version`
   - If `npm` is not recognized, try restarting your computer. If it still does not work, try following [these steps for Windows](https://dev.to/supritha/npm-is-not-recognized-as-internal-or-external-command-solution-o1n), or [these for Mac](https://medium.com/@hayasnc/how-to-install-nodejs-and-npm-on-mac-using-homebrew-b33780287d8f).
4. Open the repository folder in the terminal and type `cd react-demo`
5. Type `npm install` to install the project's dependencies
6. Type `npm start`
   - After some setup, this should open a browser tab with your app! Now you're all set for the interactive demo.

### Django demo

1. Download and install Python from https://www.python.org/ (if you don't already have it)
2. Find the **terminal** on your computer
   - Mac: `Terminal`
   - Windows: `Powershell` / `Command Prompt` / `Windows Terminal`
   - VSCode: `Terminal` (in the top bar) -> `New Terminal`
3. Install Python 3.9 or 3.10, then check that it was installed correctly with `python --version`
   - If using Python 3.14 or later, please change the `django-demo/backend/requirements.txt` Django version as described by comment.
4. Open the repository folder in the terminal and type `cd django-demo/backend`
5. Create a virtual environment with `python -m venv .venv`
6. Activate the virtual environment:
   - Windows PowerShell: `.\.venv\Scripts\Activate.ps1`
   - Mac/Linux: `source .venv/bin/activate`
7. Type `pip install -r requirements.txt` to install Django and the backend dependencies
8. Type `python manage.py migrate` to initialize the database
9. Type `python manage.py loaddata initial_data` to load example authors and todos
10. Type `python manage.py createsuperuser` to create an account for the Django admin
11. Type `python manage.py runserver` to run the backend at `http://localhost:8000`
12. Open a new terminal window (and leave the previous one running!)
13. Move to the frontend with `cd django-demo/frontend`
14. Type `npm install` to install the frontend dependencies
15. Type `npm start` to run the frontend at `http://localhost:3000`

### VSCode

I recommend everyone to install **VSCode** as your code editor:

1. Download and install from https://code.visualstudio.com/
2. Launch it
3. Go to `File -> Open Folder`
4. Find the `react-demo`/`django-demo` folder (depending on which project you want to open), and double-click it. If you made it from a fresh terminal window earlier, it should be located in:
   - Mac: `/Users/[your username]/[react-demo/django-demo]` (press `Command + Shift + H` and you should see it)
   - Windows: `C:\Users\[your username]\[react-demo/django-demo]`
5. Now you should see your React/Django files on the left in VSCode. Next time you open VSCode, you'll enter right into this folder and be ready to join the demo!

## Repo contents

- `react-demo` contains a simple React todo app used for the interactive demo.
- `django-demo/backend` contains a simple Django backend for todos, with a GraphQL API using Graphene.
- `django-demo/frontend` is a copy of `react-demo`, but now connected to the Django backend to fetch and create todos.
- `slides` contains the presentation slides from the crash course (in Norwegian, since the course has been held for students in Trondheim)
