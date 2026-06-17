import express from "express";
import { users } from "../data/users";

const router = express.Router();

// Get all users
router.get("/", (req, res) => {
  res.json(users);
});

// Assign role
router.post("/:id/roles", (req, res) => {
  const { id } = req.params;
  const { roleId } = req.body;

  const user = users.find((u) => u.id === id);

  if (!user) {
    res.status(404).json({
      message: "User not found",
    });
    return;
  }

  if (!user.roles.includes(roleId)) {
    user.roles.push(roleId);
  }

  res.json(user);
});

// REMOVE ROLE  ← ADD THIS WHOLE BLOCK
router.delete("/:id/roles/:roleId", (req, res) => {
  const { id, roleId } = req.params;

  const user = users.find((u) => u.id === id);

  if (!user) {
    res.status(404).json({
      message: "User not found",
    });
    return;
  }

  user.roles = user.roles.filter(
    (role) => role !== roleId
  );

  res.json(user);
});

export default router;