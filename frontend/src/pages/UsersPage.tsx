import { useEffect, useState } from "react";
import api from "../services/api";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

function UsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [roles, setRoles] = useState<any[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchRoles();
  }, []);

  const fetchUsers = async () => {
    const response = await api.get("/users");
    setUsers(response.data);
  };

  const fetchRoles = async () => {
    const response = await api.get("/roles");
    setRoles(response.data);
  };

  const getRoleName = (roleId: string) => {
    const role = roles.find((r) => r.id === roleId);
    return role ? role.name : roleId;
  };

  const assignRole = async (
    userId: string,
    roleId: string
  ) => {
    if (!roleId) return;

    await api.post(`/users/${userId}/roles`, {
      roleId,
    });

    fetchUsers();
  };

  return (
    <div>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Users
      </Typography>

      {users.map((user) => (
        <Card
          key={user.id}
          sx={{
            mb: 3,
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          <CardContent>
            <Typography variant="h5">
              {user.name}
            </Typography>

            <Typography sx={{ mt: 2 }}>
              Current Roles
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              sx={{ mt: 1, mb: 2 }}
            >
              {user.roles.map((roleId: string) => (
                <div key={roleId}>
                  <Chip
                    label={getRoleName(roleId)}
                  />

                 <Button
  variant="outlined"
  size="small"
  color="error"
  sx={{ ml: 1 }}
  onClick={async () => {
    await api.delete(
      `/users/${user.id}/roles/${roleId}`
    );

    fetchUsers();
  }}
>
  Remove
</Button>
                </div>
              ))}
            </Stack>

            <select
              onChange={(e) =>
                assignRole(
                  user.id,
                  e.target.value
                )
              }
            >
              <option value="">
                Assign Role
              </option>

              {roles.map((role) => (
                <option
                  key={role.id}
                  value={role.id}
                >
                  {role.name}
                </option>
              ))}
            </select>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default UsersPage;