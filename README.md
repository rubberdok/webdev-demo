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
4. Type `npx create-react-app react-demo --template typescript` in the terminal
   - `npx` this time, not `npm`!
   - If prompted to install `create-react-app`, type `y`.
   - This creates a React app called `react-demo`.
   - If you're on a Mac, you may be prompted to install _Command Line Developer Tools_. Do it!
5. Type `cd react-demo` to move to the new `react-demo` subfolder
6. Type `npm start`
   - After some setup, this should open a browser tab with your app! Now you're all set for the interactive demo.

### Django demo

1. Download and install Python from https://www.python.org/ (if you don't already have it)
2. Find the **terminal** on your computer
   - Mac: `Terminal`
   - Windows: `Powershell` / `Command Prompt` / `Windows Terminal`
3. Open the terminal, and check that Python was installed correctly by typing `python3 --version`
4. Type `mkdir django-demo` to make a folder for the project
5. Type `cd django-demo` to move into the folder
6. Type `pip install Django==3.2.14 graphene-django==2.15.0` to install Django and Graphene
7. Type `django-admin startproject config .` (don't miss the `.`!) to set up the Django project with a `config` module
8. Type `python3 manage.py startapp todos` to create a Django app for todos
9. Type `python3 manage.py runserver` to run the server
10. Open a new terminal window (and leave the previous one running!)
11. Type `cd django-demo` again in the new terminal window, to get back to the project
12. Type `python3 manage.py migrate` to initialize the database

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
