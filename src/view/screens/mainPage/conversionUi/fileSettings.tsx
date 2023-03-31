import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import React from "react";
import {
  FileSettingsSections,
  FileSettingsFromConfig,
  FileSettingFromConfig,
} from "src/library/converters/types";
import {
  getInputsOnChange,
  SetState_FileSettingsConfig,
} from "src/view/screens/mainPage/conversionUi/fileSettingsState";

const _getInputComponent = (
  index: number,
  input: FileSettingFromConfig,
  setInputState: SetState_FileSettingsConfig
) => {
  if (typeof input.value === "boolean") {
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={input.value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setInputState(index, event.target.checked)
            }
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
        label={input.label}
        value={input.value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          if (Number.isInteger(+event.target.value)) {
            setInputState(index, Number(event.target.value));
          }
          if (event.target.value === "") {
            setInputState(index, event.target.value);
          }
        }}
        name={input.label}
      />
    );
  } else {
    return <></>;
  }
};

const _getGridInputComponents = (
  fileSettings: FileSettingsFromConfig,
  setInputState: SetState_FileSettingsConfig
) => {
  const newComponents = [];

  for (const [index, fileSetting] of fileSettings.entries()) {
    newComponents.push(
      <Grid
        key={fileSetting.label}
        item
        xs={2}
        sm={1}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {_getInputComponent(index, fileSetting, setInputState)}
      </Grid>
    );
  }

  return newComponents;
};

type ReactStatePair_FileSettingsConfig = [
  FileSettingsSections,
  React.Dispatch<React.SetStateAction<FileSettingsSections>>
];

/**
 * File Settings Inputs.
 * @param configState [state, setState] react pair for file settings config.
 */
const FileSettings = ({
  configState,
}: {
  configState: ReactStatePair_FileSettingsConfig;
}) => {
  return (
    <Box>
      {/*TODO: LOOP */}
      <Grid container spacing={1} columns={2}>
        {_getGridInputComponents(
          configState[0]["Configuration"],
          getInputsOnChange(configState[0], configState[1])
        )}
      </Grid>
    </Box>
  );
};

export default FileSettings;
