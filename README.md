# COMP3123 Exercise 05 - Express.js with Routing

**Student ID:** 101072756
**Name:** Mohammad Akib Shaikh
**Course:** COMP3123 - Full Stack Development I

## Project Overview

An Express.js application demonstrating core routing, JSON handling, file-based data, and middleware.

## Structure

   101072756_COMP3123-exec05/
   ├── index.js
   ├── package.json
   ├── user.json
   ├── routes/
   │   └── users.js
   └── public/
       └── home.html

## Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/home` | Serves `home.html` with a welcome message |
| GET | `/api/v1/user/profile` | Returns user details from `user.json` |
| POST | `/api/v1/user/login` | Validates username & password from JSON body |
| GET | `/api/v1/user/logout/:username` | Returns HTML logout message |
| - | Error middleware | Returns 500 "Server Error" on exceptions |

## How to Run

    npm install
    npm start

Server runs at `http://localhost:8081`.

## Test Credentials

    { "username": "bret", "password": "bret@123" }
