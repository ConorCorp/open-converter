import { TextField, Grid, Box, Typography } from "@mui/material";
import { ConverterConfig } from "src/services/converters/types";
import { useState } from "react";
import FileConfig, { FileConfigInput } from "./fileConfig";
import { useSearchParams } from "react-router-dom";

const getBooleanConfig = () => {
  const [searchParams] = useSearchParams();
  return searchParams.get("input_1") === "true";
};

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
  const [inputConfig, setInputConfig] = useState<any>({
    input1: getBooleanConfig(),
  });
  const [searchParams, setSeachParams] = useSearchParams();

  // Numbered File Config
  // {
  //   value: inputConfig.input2,
  //   label: "input2",
  //   onChange: handleNumberOnlyInputChange,
  // },
  const getFileConfigs = (): FileConfigInput[] => {
    return [
      {
        value: inputConfig.input1,
        label: "input1",
        onChange: handleInputConfigChange,
      },
    ];
  };

  const handleInputConfigChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputConfig({
      ...inputConfig,
      [event.target.name]: event.target.checked,
    });
  };

  //TODO: What state should be accept empty string? Null?
  // Skip until necessary
  // const handleNumberOnlyInputChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const regex = /^[0-9\b]+$/;
  //   if (event.target.value === "" || regex.test(event.target.value)) {
  //     console.log(event.target.value);
  //     setInputConfig({
  //       ...inputConfig,
  //       [event.target.name]: event.target.value,
  //     });
  //   }
  // };

  return (
    <Box
      sx={{
        display: "flex",
        marginY: 4,
      }}
    >
      <Grid container spacing={2} columns={2}>
        <Grid item xs={2} sm={1}>
          <FileConfig inputs={getFileConfigs()} />
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
