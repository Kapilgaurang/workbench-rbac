import express from "express";
import { users } from "../data/users";
import { roles } from "../data/roles";

const router = express.Router();

router.get("/:id", (req, res) => {
  const user = users.find(
    (u) => u.id === req.params.id
  );

  if (!user) {
    res.status(404).json({
      message: "User not found",
    });
    return;
  }

  const permissions = new Set<string>();

  user.roles.forEach((roleId) => {
    const role = roles.find(
      (r) => r.id === roleId
    );

    if (role) {
      role.permissions.forEach((permission) => {
        permissions.add(permission);
      });
    }
  });

  res.json({
    user: user.name,
    permissions: [...permissions],
  });
});

export default router;