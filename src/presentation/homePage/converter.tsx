import {
  TextField,
  Grid,
  Box,
  FormControl,
  FormLabel,
  FormGroup,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Checkbox,
} from "@mui/material";
import { FileType, getTextBoxPlaceholders } from "/src/services/converter";
import { useState } from "react";

const Converter = () => {
  const [inputFileType, setInputFileType] = useState<FileType>(FileType.JSON);
  const [outputFileType, setOutputFileType] = useState<FileType>(FileType.CSV);
  const [inputConfig, setInputConfig] = useState<any>({
    input1: false,
  });

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
          <Box>
            <FormLabel>Configuration</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={inputConfig.input1}
                    onChange={handleInputConfigChange}
                    name="input1"
                  />
                }
                label="input1"
              />
            </FormGroup>
          </Box>
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
