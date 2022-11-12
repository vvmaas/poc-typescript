# poc-typescript

Proof of concept to using typescript.

## About

This is a API that has a CRUD for text messages, and a filter by keyword.

## How to run for development

1. Clone this repository

2. Install all dependencies

```bash
npm i
```

3. Create a PostgreSQL database with whatever name you want

4. Configure the `.env.development` file using the `.env.example` file 
5. Run in a development environment:

```bash
npx nodemon src/app.ts
```

## How to use each route

- POST: /posts  
```bash
body: { "text": "Text message here." }
```  
  
- GET: /posts  
```bash
response: [
            { "id": 11, "text": "Text", "created_at": 2022-11-10 14:54:12.823043 },
            { "id": 10, "text": "Furia", "created_at": 2022-11-10 14:44:24.764319 },
            ...
        ]
```
The response is an array, listing the posts from most recent to least recent.
- UPDATE: /posts/:id
```bash
body: { "text": "Text message here." }
```
- DELETE: /posts/:id
```bash
If id is valid, should delete the post and send status code 204.
```
- GET: /posts/:keyword
```bash
response: [
            { "id": 11, "text": "Text", "created_at": 2022-11-10 14:54:12.823043 },
            { "id": 9, "text": "texto texto", "created_at": 2022-11-09 19:12:06.196344 },
            ...
        ]
```
Example using keyword "text", the route is case insensitive.

The response is an array, listing the posts from most recent to least recent.