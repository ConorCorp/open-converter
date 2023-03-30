import { TextField, Grid, Box, Typography } from "@mui/material";
import { ConverterConfig } from "src/library/converters/types";
import { useState } from "react";
import FileSettings from "src/view/screens/mainPage/conversionUi/fileSettings";
import {
  getSettingsStateFromConfig,
  getFileSettingsAsArray,
  getHandleConfigChange,
  CheckboxState,
  FileSettingsState,
} from "src/view/screens/mainPage/conversionUi/fileSettingsState";

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
  const [inputConfig, setInputConfig] = useState<FileSettingsState>(
    getSettingsStateFromConfig(input.config)
  );
  const [outputConfig, setOutputConfig] = useState<FileSettingsState>(
    getSettingsStateFromConfig(output.config)
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
          <FileSettings
            inputs={getFileSettingsAsArray(
              inputConfig,
              getHandleConfigChange(inputConfig, setInputConfig)
            )}
          />
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
            sx={{ marginTop: 2 }}
          />
        </Grid>
        <Grid item xs={2} sm={1}>
          {/* Output Section */}
          <FileSettings
            inputs={getFileSettingsAsArray(
              outputConfig,
              getHandleConfigChange(outputConfig, setOutputConfig)
            )}
          />
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
            sx={{ marginTop: 2 }}
          />
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
