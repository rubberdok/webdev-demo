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

## Preparation

Following these steps prepares you to join the interactive React demo of the crash course. This is not obligatory, but I recommend everyone to do it to maximize their learning.

1. Download and install `Node.js` from https://nodejs.org/en/
2. Find the **terminal** on your computer
   - Mac: `Terminal`
   - Windows: `Powershell` / `Command Prompt` / `Windows Terminal`
3. Open the terminal, and check that Node was installed correctly by typing `npm --version`
   - If `npm` is not recognized, try restarting your computer. If it still does not work, try following [these steps for Windows](https://dev.to/supritha/npm-is-not-recognized-as-internal-or-external-command-solution-o1n), or [these for Mac](https://medium.com/@hayasnc/how-to-install-nodejs-and-npm-on-mac-using-homebrew-b33780287d8f).
4. Type `npx create-react-app react-demo` in the terminal
   - `npx` this time, not `npm`!
   - If prompted to install `create-react-app`, type `y`.
   - This creates a React app called `react-demo`.
5. Type `cd react-demo` to move to the new `react-demo` subfolder
6. Type `npm start`
   - After some setup, this should open a browser tab with your app! Now you're all set for the interactive demo.

In addition, I recommend everyone to install **VSCode** as your code editor:

1. Download and install from https://code.visualstudio.com/
2. Launch it
3. Go to `File -> Open Folder`
4. Double click the `react-demo` folder. If you made it from a fresh terminal window earlier, it should be located in:
   - Mac: `/Users/[your username]/react-demo` (press `Command + Shift + H` and you should see it)
   - Windows: `C:\Users\[your username]\react-demo`
5. Now you should see your React app files on the left in VSCode. Next time you open VSCode, you'll enter right into this folder and be ready to join the demo!

If you have any trouble with the preparation, please [file an issue](https://github.com/rubberdok/webdev-demo/issues/new).

## Repo Contents

- `slide_examples` contains the files used for the code examples in the crash course slides.
- `react-demo` contains a simple React todo list app used for the interactive demo.
