import { Box, Typography } from "@mui/material";
import { FileType } from "src/library/converters/types";

const homepageTitle = ({
  inputFile,
  outputFile,
}: {
  inputFile: FileType;
  outputFile: FileType;
}) => {
  return (
    <>
      <Typography variant="h2" sx={{ mt: 4, mb: 1, color: "primary.color" }}>
        Open Converter: {inputFile} to {outputFile}
      </Typography>
      <Typography variant="subtitle1">
        Convert your files smarter with
        <Box fontWeight="fontWeightMedium" display="inline">
          {" "}
          reliable open source algorithms 🛠️
        </Box>
      </Typography>
    </>
  );
};

export default homepageTitle;
