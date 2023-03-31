import { cloneClassObject } from "src/helpers";
import {
  FileSettingFromConfig,
  FileSettingsSections,
} from "src/library/converters/types";

export type SetState_FileSettingsConfig = (index: number, value: any) => void;

//TODO: Update any
//TODO: Write JSDoc
export const getInputsOnChange = (
  state: FileSettingsSections,
  setState: React.Dispatch<React.SetStateAction<FileSettingsSections>>
): SetState_FileSettingsConfig => {
  return (index: number, value: any) => {
    const newState = Object.assign({}, state);
    //TODO remove configuration.
    newState["Configuration"] = newState["Configuration"].map(
      (orig: FileSettingFromConfig, i: number) => {
        if (i === index) {
          const copy = cloneClassObject(orig);
          copy.value = value;
          return copy;
        } else {
          return orig;
        }
      }
    );
    setState(newState);
  };
};
