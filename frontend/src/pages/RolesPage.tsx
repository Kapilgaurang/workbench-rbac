import { useEffect, useState } from "react";
import api from "../services/api";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function RolesPage() {
  const [roles, setRoles] = useState<any[]>([]);

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    const response = await api.get("/roles");
    setRoles(response.data);
  };

  return (
    <div>
      <Typography
        variant="h4"
        sx={{ mb: 2 }}
      >
        Roles
      </Typography>

      {roles.map((role) => (
        <Card
          key={role.id}
          sx={{
            mb: 2,
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          <CardContent>
            <Typography variant="h5">
              {role.name}
            </Typography>

            <Typography
              variant="body1"
              sx={{ mt: 1 }}
            >
              Permissions: {role.permissions.length}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default RolesPage;