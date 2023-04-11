# server, client integration
server
npm i express body-parser cookie-parser compression cors dotenv nodemon
touch .env
package.json
```
{
  ...
  "scripts": {
    ...
    "start": "nodemon index.js"
  },
  "type": "module"
}