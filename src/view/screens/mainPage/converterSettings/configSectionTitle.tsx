import { Grid, Typography } from "@mui/material";

const ConfigSectionTitle = ({ title }: { title: string }) => {
  return (
    <Grid
      key={title}
      item
      xs={2}
      sm={2}
      sx={{
        display: "flex",
        alignItems: "center",
        mt: 2,
      }}
    >
      <Typography variant="body1" fontWeight="fontWeightMedium">
        {title}
      </Typography>
    </Grid>
  );
};

export default ConfigSectionTitle;
