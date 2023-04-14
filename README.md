
# Code Stoic tuts
https://www.youtube.com/watch?v=Jdt7zijBcLg&list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza&index=17&ab_channel=CodeStoic

# server, client integration
server side:

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
