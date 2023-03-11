import { Typography } from "@mui/material";

const homepageTitle = () => {
  return (
    <>
      <Typography variant="h2" sx={{ mt: 4, mb: 1, color: "primary.color" }}>
        Open Converter
      </Typography>
      <Typography variant="subtitle1">
        Convert your files with open sourced algorithms.
      </Typography>
    </>
  );
};

export default homepageTitle;
