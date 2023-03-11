import {
  TextField,
  Grid,
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";
import { FileType, getTextBoxPlaceholders } from "src/services/converter";
import { useState } from "react";
import FileConfig, { FileConfigInput } from "./fileConfig";
import { useSearchParams } from "react-router-dom";

const getBooleanConfig = () => {
  const [searchParams] = useSearchParams();
  return searchParams.get("input_1") === "true";
};

const Converter = () => {
  const [inputFileType, setInputFileType] = useState<FileType>(FileType.JSON);
  const [outputFileType, setOutputFileType] = useState<FileType>(FileType.CSV);
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
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputFileType((event.target as HTMLInputElement).value as FileType);
  };

  const handleOutputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOutputFileType((event.target as HTMLInputElement).value as FileType);
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
          <FormControl sx={{ marginBottom: 1 }}>
            <FormLabel>Input File Types</FormLabel>
            <RadioGroup
              row
              name="row-radio-buttons-group"
              value={inputFileType}
              onChange={handleInputChange}
            >
              <FormControlLabel
                value={FileType.JSON}
                control={<Radio />}
                label={FileType.JSON}
              />
            </RadioGroup>
          </FormControl>
          <FileConfig inputs={getFileConfigs()} />
          <TextField
            id="outlined-multiline-static"
            label={`${inputFileType} Input`}
            multiline
            rows={12}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            placeholder={
              getTextBoxPlaceholders(inputFileType, outputFileType).input
            }
            sx={{ marginTop: 2 }}
          />
        </Grid>
        <Grid item xs={2} sm={1}>
          <FormControl sx={{ marginBottom: 2 }}>
            <FormLabel>Output File Types</FormLabel>
            <RadioGroup
              row
              name="row-radio-buttons-group"
              value={outputFileType}
              onChange={handleOutputChange}
            >
              <FormControlLabel
                value={FileType.CSV}
                control={<Radio />}
                label={FileType.CSV}
              />
            </RadioGroup>
          </FormControl>
          <TextField
            id="outlined-multiline-static"
            label={`${outputFileType} Output`}
            multiline
            rows={12}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            placeholder={
              getTextBoxPlaceholders(inputFileType, outputFileType).output
            }
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

export default Converter;
