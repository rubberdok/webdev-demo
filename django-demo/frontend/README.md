# React Frontend for Django Demo

Copy of `react-demo`, but now connected to the Django backend (`django-demo/backend`) to fetch and create todos.

## Preparation

If you've participated in the React and Django demos, here are the steps to follow to prepare the connection between them.

### Backend

1. Open `django-demo` in VSCode
2. In `django-demo/config/settings.py`, replace `ALLOWED_HOSTS = []` with:
   ```
   ALLOWED_HOSTS = ["localhost", "127.0.0.1"]
   CORS_ALLOWED_ORIGINS = ["http://localhost:3000"]
   ```
3. In the same file, under `MIDDLEWARE`, add this to the list:
   ```
   MIDDLEWARE = [
     ...
     "corsheaders.middleware.CorsMiddleware",
   ]
   ```
4. Open a new terminal window, and navigate to `django-demo` (`cd django-demo`)
5. If you set up a Python virtual environment previously: activate it
   - On Windows: `venv\scripts\activate`
   - On Mac/Linux: `source venv/bin/activate`
6. Type `pip install django-cors-headers==3.13.0`
7. Type `python3 manage.py graphql_schema`
8. Type `python3 manage.py runserver` - the backend should now be ready, leave this terminal window open!

### Frontend

1.  Open `react-demo` in VSCode
2.  In the `package.json` file, add this line at the start of `"dependencies"`:
    ```
    "dependencies": {
      "@apollo/client": "^3.6.9",
      ...
    },
    ```
3.  Still in `package.json`, add the following between `"dependencies"` and `"scripts"`:
    ```
    "dependencies": {
      ...
    },
    "devDependencies": {
      "@graphql-codegen/cli": "2.11.6",
      "@graphql-codegen/introspection": "2.2.1",
      "@graphql-codegen/typed-document-node": "^2.2.3",
      "@graphql-codegen/typescript": "2.7.2",
      "@graphql-codegen/typescript-operations": "2.5.2",
      "@graphql-codegen/typescript-react-apollo": "3.3.2",
      "@graphql-codegen/typescript-resolvers": "2.7.2"
    },
    "scripts": {
      ...
    },
    ```
4.  Still in `package.json`, add this line at the start of `"scripts"`:
    ```
    "scripts": {
      "generate": "graphql-codegen --config codegen.yml",
      ...
    }
    ```
5.  Add a new file called `codegen.yml` under `react-demo`, and paste the following into it:
    ```
    overwrite: true
    schema: "../django-demo/**/schema.json"
    documents: "src/graphql/**/\*.graphql"
    generates:
      src/generated/graphql.ts:
        plugins:
          - "typescript"
          - "typescript-operations"
          - "typed-document-node"
    ```
6.  Open a new terminal window/tab, and navigate to `react-demo` (cd `react-demo`)
7.  Type `npm install`
