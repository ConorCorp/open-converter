import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import React from "react";

export type FileSetting = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: boolean | number | "";
  label: string;
};

const _getInputComponent = (input: FileSetting) => {
  if (typeof input.value === "boolean") {
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={input.value}
            onChange={input.onChange}
            name={input.label}
          />
        }
        label={input.label}
      />
    );
  } else if (typeof input.value === "number" || input.value === "") {
    return (
      <TextField
        size="small"
        variant="filled"
        inputProps={
          typeof input.value === "number"
            ? { inputMode: "numeric", pattern: "[0-9]*" }
            : { inputMode: "text" }
        }
        label={input.label}
        value={input.value}
        onChange={input.onChange}
        name={input.label}
      />
    );
  } else {
    return <></>;
  }
};

const _getGridInputComponents = (inputs: FileSetting[]) => {
  const newComponents = [];

  for (const input of inputs) {
    newComponents.push(
      <Grid
        key={input.label}
        item
        xs={2}
        sm={1}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {_getInputComponent(input)}
      </Grid>
    );
  }

  return newComponents;
};

/**
 * File Settings Inputs.
 * @param inputs List of file settings to display.
 */
const FileSettings = ({ inputs }: { inputs: FileSetting[] }) => {
  return (
    <Box>
      <Grid container spacing={1} columns={2}>
        {_getGridInputComponents(inputs)}
      </Grid>
    </Box>
  );
};

export default FileSettings;
