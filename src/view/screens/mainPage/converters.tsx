import { Box, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import {
  ConverterConfig,
  FileSettingsSections,
} from "src/library/converters/types";
import FileSettings from "src/view/screens/mainPage/converterSettings/fileSettings";

/**
 * UI Element with side by side coverters
 * @param input ConverterConfig to convert
 * @param output ConverterConfig to convert into
 */
const Converters = ({
  input,
  output,
}: {
  input: ConverterConfig;
  output: ConverterConfig;
}) => {
  const [inputConfig, setInputConfig] = useState<FileSettingsSections>(
    input.config || {}
  );
  const [outputConfig, setOutputConfig] = useState<FileSettingsSections>(
    output.config || {}
  );

  return (
    <Box
      sx={{
        display: "flex",
        marginY: 4,
      }}
    >
      <Grid container spacing={2} columns={2}>
        {/* Input Section */}
        <Grid item xs={2} sm={1}>
          <TextField
            id="outlined-multiline-static"
            label={`${input.fileType} Input`}
            multiline
            rows={12}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            placeholder={input.textBoxPlaceholder}
            sx={{ mt: 4 }}
          />
          <FileSettings configState={[inputConfig, setInputConfig]} />
        </Grid>
        <Grid item xs={2} sm={1}>
          {/* Output Section */}
          <TextField
            id="outlined-multiline-static"
            label={`${output.fileType} Output`}
            multiline
            rows={12}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            placeholder={output.textBoxPlaceholder}
            sx={{ mt: 4 }}
          />
          <FileSettings configState={[outputConfig, setOutputConfig]} />
        </Grid>
        <Grid item>
          <Typography>
            Looking for another conversion? Request or add one on Github!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Converters;
