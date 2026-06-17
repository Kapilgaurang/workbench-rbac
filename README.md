# Workbench RBAC

A Role and Permission Builder built for The Internet Folks SDE Intern Assignment.

## Features

* View available permissions
* Create custom roles
* Update existing roles
* Assign roles to users
* Remove roles from users
* Support multiple roles per user
* Calculate effective permissions
* Union-based permission resolution

## Tech Stack

### Frontend

* React
* TypeScript
* Material UI
* Axios

### Backend

* Node.js
* Express
* TypeScript

## Permission Resolution

This project uses a Union-Based RBAC strategy.

When a user has multiple roles, all permissions from all assigned roles are combined into a single effective permission set.

Example:

Role A:

* Projects:view

Role B:

* Projects:edit

Effective Permissions:

* Projects:view
* Projects:edit

## Running the Backend

```bash
cd backend
npm install
npm run dev
```

## Running the Frontend

```bash
cd frontend
npm install
npm run dev
```

## API Endpoints

### Permissions

GET /permissions

### Roles

GET /roles

POST /roles

PUT /roles/:id

### Users

GET /users

POST /users/:id/roles

DELETE /users/:id/roles/:roleId

### Effective Permissions

GET /effective-permissions/:id

## Assignment Requirements Covered

* Return all available permissions
* Create and update roles
* Assign and unassign roles
* Resolve effective permissions
* Multiple roles per user
* Frontend UI for role and permission management
* TypeScript on frontend and backend
