# Workbench RBAC

Role-Based Access Control (RBAC) system built for The Internet Folks SDE Intern Assignment.

## Features

### Role Management
- Create custom roles
- Update existing roles
- Assign permissions to roles
- Support multiple permissions per role

### User Management
- View all users
- Assign roles to users
- Remove roles from users
- Support multiple roles per user

### Effective Permissions
- Resolve permissions across multiple roles
- Union-based permission merging
- No duplicate permissions

## Permission Matrix

### Projects
- view
- create
- edit
- delete
- archive

### Tasks
- view
- create
- edit
- delete
- assign

### Members
- view
- invite
- remove
- update role

### Billing
- view
- update
- download invoices

### Settings
- view
- update

---

## Tech Stack

### Frontend
- React
- TypeScript
- Material UI
- Axios

### Backend
- Node.js
- Express.js
- TypeScript

---

## API Endpoints

### Permissions

GET /permissions

Returns all available permissions.

---

### Roles

GET /roles

Returns all roles.

POST /roles

Creates a new role.

PUT /roles/:id

Updates an existing role.

---

### Users

GET /users

Returns all users.

POST /users/:id/roles

Assign role to user.

DELETE /users/:id/roles/:roleId

Remove role from user.

---

### Effective Permissions

GET /effective-permissions/:id

Returns all resolved permissions for a user.

---

## Permission Resolution Strategy

This project uses a UNION-based permission model.

If a user has multiple roles:

Role A:
- Projects:view

Role B:
- Projects:edit

Effective permissions:

- Projects:view
- Projects:edit

This approach is simple, predictable, and commonly used in SaaS products.

---

## Running the Project

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Author

Gaurang Kapil
