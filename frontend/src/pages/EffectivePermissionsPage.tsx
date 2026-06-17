import { useEffect, useState } from "react";
import api from "../services/api";

import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function EffectivePermissionsPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [permissions, setPermissions] = useState<string[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await api.get("/users");
    setUsers(response.data);
  };

  const fetchPermissions = async (userId: string) => {
    const response = await api.get(
      `/effective-permissions/${userId}`
    );

    setPermissions(response.data.permissions);
  };

  return (
    <Card sx={{ mt: 3, mb: 3 }}>
      <CardContent>
        <Typography
          variant="h4"
          gutterBottom
        >
          Effective Permissions
        </Typography>

        <select
          value={selectedUser}
          onChange={(e) => {
            setSelectedUser(
              e.target.value
            );

            if (e.target.value) {
              fetchPermissions(
                e.target.value
              );
            }
          }}
        >
          <option value="">
            Select User
          </option>

          {users.map((user) => (
            <option
              key={user.id}
              value={user.id}
            >
              {user.name}
            </option>
          ))}
        </select>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          {permissions.map(
            (permission) => (
              <Chip
                key={permission}
                label={permission}
                color="primary"
              />
            )
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default EffectivePermissionsPage;