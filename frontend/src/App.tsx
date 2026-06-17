import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import RolesPage from "./pages/RolesPage";
import UsersPage from "./pages/UsersPage";
import EffectivePermissionsPage from "./pages/EffectivePermissionsPage";

function App() {
  return (
    <Container maxWidth="lg">
      <Typography
        variant="h3"
        align="center"
        sx={{ mt: 4, mb: 4 }}
      >
        Workbench RBAC
      </Typography>

      <RolesPage />

      <Divider sx={{ my: 4 }} />

      <UsersPage />

      <Divider sx={{ my: 4 }} />

      <EffectivePermissionsPage />
    </Container>
  );
}

export default App;