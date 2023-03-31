import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import React from "react";
import {
  FileSettingFromConfig,
  FileSettingsFromConfig,
} from "src/library/converters/types";
import ConfigSectionTitle from "src/view/screens/mainPage/converterSettings/configSectionTitle";
import {
  getOnChangeForSectionsInputs,
  ReactStatePair_FileSettingsConfig,
  SetState_FileSettingsConfig,
} from "src/view/screens/mainPage/converterSettings/fileSettingsState";

/**
 * Ge a FileSetting input.
 */
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

/**
 * Ge all FileSetting inputs and put them in a grid.
 */
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

/**
 * File Settings Section. Renders each section provided <input/output>.config
 * @param configState [state, setState] react pair for file settings config.
 */
const FileSettings = ({
  configState,
}: {
  configState: ReactStatePair_FileSettingsConfig;
}) => {
  const [configSections] = configState;

  return (
    <Box>
      <Grid container spacing={0.5} columns={2}>
        {Object.entries(configSections).map(([sectionLabel, fileSettings]) => {
          return (
            <>
              <ConfigSectionTitle title={sectionLabel} />
              {_getGridInputComponents(
                fileSettings,
                getOnChangeForSectionsInputs(sectionLabel, configState)
              )}
            </>
          );
        })}
      </Grid>
    </Box>
  );
};

export default FileSettings;
