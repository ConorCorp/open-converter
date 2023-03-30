import { Box, Container, Typography } from "@mui/material";
import { useRouteError, Link } from "react-router-dom";
import { MapPinOff } from "lucide-react";
import { useTheme } from "@mui/material/styles";

const Error = () => {
  const theme = useTheme();
  const error = useRouteError();

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <MapPinOff color={theme.palette.primary.main} size={48} />
        <Typography variant="h2" sx={{ marginBottom: 2 }}>
          There's nothing here!
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
          Take me <Link to={"/"}>home</Link>, country roadssssss.
        </Typography>
        <Typography variant="subtitle2">
          Error: {error.statusText || error.message}
        </Typography>
      </Box>
    </Container>
  );
};

export default Error;
