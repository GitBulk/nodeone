https://www.youtube.com/watch?v=O8IipcpTmYU&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=5&ab_channel=TheNetNinja

# server, client integration
**server side:**

1. npm i express body-parser cookie-parser compression cors dotenv nodemon
2. touch .env and config PORT
3. package.json
```
{
  ...
  "scripts": {
    ...
    "start": "nodemon index.js"
  },
  "type": "module"
}
```
4. npm i mongoose@5.X

**client side:**
1. npx create-react-app client
