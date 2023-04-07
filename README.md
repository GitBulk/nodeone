The Complete Guide To Building A REST API With Node, Express, TypeScript & MongoDB + Authentication (1 hour)

https://www.youtube.com/watch?v=b8ZUb_Okxro&ab_channel=CodeWithAntonio



# setup project
npm init


npm install -D typescript

npm install -D ts-node

npm install -D nodemon

tsconfig.json
{
  "compilerOptions": {
    "module": "NodeNext",
    "moduleResolution: "node",
    "baseUrl: "src",
    "outDir": "dist",
    "sourceMap": true,
    "noImplictAny": true
  },
  "include": ["src/**/*]
}

nodemon.json
{
  "watch": ["src],
  "ext": ".ts, .js",
  "exec": "ts-node ./src/index.ts"
}


touch src/index.js
console.log('hello ts')

package.json
{
  "scripts": {
    "start": "nodemon",
    ...
  }
  ...
}

touch index.ts
console.log('first ts')

terminal
npm start

npm i express body-parser cookie-parser compression cors
npm i @types/express @types/body-parser @types/cookie-parser @types/compression @types/cors

npm install dotenv
touch .env
MONGO_URL="mongodb://127.0.0.1:27017/database_name"

npm install mongoose
npm install -D @types/mongoose

add new key to .env
AUTHENTICATION_SECRET_KEY="...."