import { TextField, Grid, Box, Typography } from "@mui/material";
import { ConverterConfig } from "src/library/converters/types";
import { useState } from "react";
import FileSettings from "src/view/screens/mainPage/conversionUi/fileSettings";
import {
  getInitialCheckBoxState,
  getFileSettings,
  getHandleConfigChange,
  CheckboxState,
} from "src/view/screens/mainPage/conversionUi/fileSettingsState";
// import { useSearchParams } from "react-router-dom";

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
  // TODO:
  // const [searchParams] = useSearchParams();
  // return searchParams.get("input_1") === "true";
  const [inputConfig, setInputConfig] = useState<CheckboxState>(
    getInitialCheckBoxState(input.config?.checkboxes)
  );
  const [outputConfig, setOutputConfig] = useState<CheckboxState>(
    getInitialCheckBoxState(output.config?.checkboxes)
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
            inputs={getFileSettings(
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
            inputs={getFileSettings(
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
