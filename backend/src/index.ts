import express from "express";
import cors from "cors";

import permissionsRoute from "./routes/permissions";
import rolesRoute from "./routes/roles";
import usersRoute from "./routes/users";
import effectivePermissionsRoute from "./routes/effectivePermissions";

const app = express();

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Workbench API Running");
});

// Permissions API
app.use("/permissions", permissionsRoute);

// Roles API
app.use("/roles", rolesRoute);

// Users API
app.use("/users", usersRoute);

// Effective Permissions API
app.use(
  "/effective-permissions",
  effectivePermissionsRoute
);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});