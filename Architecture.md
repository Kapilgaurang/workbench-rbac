# Architecture

## Overview

This project is a Role-Based Access Control (RBAC) system built for The Internet Folks SDE Intern Assignment. It allows administrators to create and manage roles, assign roles to users, and calculate effective permissions when users have multiple roles.

---

## Frontend Architecture

### Technologies Used

* React
* TypeScript
* Material UI
* Axios

### Reason for Selection

React provides a component-based architecture that makes the UI modular and maintainable.

TypeScript improves code quality by adding type safety and reducing runtime errors.

Material UI helps create a clean and responsive admin dashboard with minimal effort.

Axios is used for communication between the frontend and backend APIs.

### Frontend Components

* Roles Page

  * Displays available roles
  * Shows permission count for each role

* Users Page

  * Displays users
  * Assigns roles to users
  * Removes roles from users

* Effective Permissions Page

  * Displays combined permissions for a selected user

---

## Backend Architecture

### Technologies Used

* Node.js
* Express
* TypeScript

### Reason for Selection

Express provides a lightweight and flexible framework for building REST APIs.

TypeScript ensures consistency between frontend and backend data models and improves maintainability.

### API Endpoints

#### Permissions

GET /permissions

Returns all available permissions.

#### Roles

GET /roles

Returns all roles.

POST /roles

Creates a new role.

PUT /roles/:id

Updates an existing role.

#### Users

GET /users

Returns all users.

POST /users/:id/roles

Assigns a role to a user.

DELETE /users/:id/roles/:roleId

Removes a role from a user.

#### Effective Permissions

GET /effective-permissions/:id

Returns the combined permissions for a specific user.

---

## Data Storage

The project uses in-memory arrays to store:

* Users
* Roles
* Permissions

This approach was selected because the assignment explicitly allows an in-memory implementation and focuses on RBAC logic rather than database persistence.

---

## Permission Resolution Strategy

### Union-Based Permission Resolution

When a user has multiple roles, all permissions from every assigned role are combined into a single effective permission set.

### Example

Role A:

* Projects:view

Role B:

* Projects:edit

Effective Permissions:

* Projects:view
* Projects:edit

### Reasoning

Union-based permission resolution is easy to understand, predictable, and commonly used in modern RBAC systems. It ensures that users receive the combined capabilities of all assigned roles without conflicts.

---

## Future Improvements

* Database integration (MongoDB/PostgreSQL)
* Authentication and authorization
* Search and filtering
* Role creation and editing through UI
* Persistent data storage
* Audit logs for role changes
