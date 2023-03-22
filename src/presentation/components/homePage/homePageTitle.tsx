import { Typography } from "@mui/material";
import { FileType } from "src/services/converters/types";

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
        Convert your files with open sourced algorithms.
      </Typography>
    </>
  );
};

export default homepageTitle;
