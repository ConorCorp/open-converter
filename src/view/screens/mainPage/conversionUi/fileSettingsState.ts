import { CheckboxConfig } from "src/library/converters/types";
import { FileSetting } from "src/view/screens/mainPage/conversionUi/fileSettings";

export type CheckboxState = {
  [index: string]: boolean;
};

// TODO: Extend this for numbered configs
/**
 * Get the inital state of the config for the checkboxes.
 *
 * First, setup up the correct checkboxdes and initial state.
 * @todo Next, check if there are search params provided.
 * @returns Object containing initial checkbox state.
 */
export const getInitialCheckBoxState = (
  checkBoxConfig: CheckboxConfig = {},
  searchParams = {}
): CheckboxState => {
  const initialState: CheckboxState = {};
  for (const [key, value] of Object.entries(checkBoxConfig)) {
    initialState[key] = value.defaultValue || false;
  }
  return initialState;
};

// Numbered File Config
// {
//   value: inputConfig.input2,
//   label: "input2",
//   onChange: handleNumberOnlyInputChange,
// },

/**
 * Some gnarly JS/TS to parse an array from our configuration state.
 * The array contains each user inputs' label/value/onChange.
 *
 * @returns FileSettings to render
 */
export const getFileSettings = (
  fileSettings: CheckboxState,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
): FileSetting[] => {
  return Object.entries(fileSettings).map((entry) => {
    return {
      label: entry[0],
      value: entry[1],
      onChange: onChange,
    } as FileSetting;
  });
};

/**
 * Closure returning an onChange function to update a converter's input state.
 * @param fileSettings Input or Output File Config State
 * @param setState It's associated setState method
 * @returns onChange to update Input or Output state.
 */
export const getHandleConfigChange = (
  fileSettings: CheckboxState,
  setState: React.Dispatch<React.SetStateAction<CheckboxState>>
) => {
  return (event: React.ChangeEvent<HTMLInputElement>) =>
    setState({
      ...fileSettings,
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
