import express from "express";
import { roles } from "../data/roles";

const router = express.Router();

// Get all roles
router.get("/", (req, res) => {
  res.json(roles);
});

// Create role
router.post("/", (req, res) => {
  const { name, permissions } = req.body;

  const newRole = {
    id: Date.now().toString(),
    name,
    permissions,
  };

  roles.push(newRole);

  res.status(201).json(newRole);
});

// Update role
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, permissions } = req.body;

  const role = roles.find((r) => r.id === id);

  if (!role) {
    res.status(404).json({
      message: "Role not found",
    });
    return;
  }

  role.name = name;
  role.permissions = permissions;

  res.json(role);
});

export default router;