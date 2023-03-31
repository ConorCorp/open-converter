import { cloneClassObject } from "src/helpers";
import {
  FileSettingFromConfig,
  FileSettingsSections,
} from "src/library/converters/types";

export type SetState_FileSettingsConfig = (index: number, value: any) => void;

export type ReactStatePair_FileSettingsConfig = [
  FileSettingsSections,
  React.Dispatch<React.SetStateAction<FileSettingsSections>>
];

/**
 * Create an onChange method for each FileSetting so that all the state is correctly updated.
 * @todo Replace with Zustand. This is a bit too fiddly.
 * @param currConfigSection Which section of inputs in state?
 * @param configState [state, setState] react pair for file settings config.
 * @returns onChange (setState) method
 */
export const getOnChangeForSectionsInputs = (
  currConfigSection: string,
  configState: ReactStatePair_FileSettingsConfig
): SetState_FileSettingsConfig => {
  const [configSections, setConfigSections] = configState;

  return (index: number, value: any) => {
    const newState = Object.assign({}, configSections);
    newState[currConfigSection] = newState[currConfigSection].map(
      (origSetting: FileSettingFromConfig, i: number) => {
        if (i === index) {
          const copy = cloneClassObject(origSetting);
          copy.value = value;
          return copy;
        } else {
          return origSetting;
        }
      }
    );
    setConfigSections(newState);
  };
};
