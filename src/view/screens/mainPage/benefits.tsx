import { Box,Grid, Typography } from "@mui/material";

const Benefits = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mt: 4, color: "primary.color" }}>
        What makes it fancy?
      </Typography>
      <Box
        sx={{
          display: "flex",
          marginY: 2,
        }}
      >
        <Grid container spacing={2} columns={6}>
          <Grid item xs={4} sm={2}>
            <Typography>
              Incididunt est exercitation nisi magna nulla laborum amet esse
              occaecat.
            </Typography>
          </Grid>
          <Grid item xs={4} sm={2}>
            <Typography>
              Incididunt est exercitation nisi magna nulla laborum amet esse
              occaecat.
            </Typography>
          </Grid>
          <Grid item xs={4} sm={2}>
            <Typography>
              Incididunt est exercitation nisi magna nulla laborum amet esse
              occaecat.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Benefits;
