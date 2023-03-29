import { CheckboxConfig } from "src/services/converters/types";

type CheckboxState = {
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
const getInitialCheckBoxState = (
  checkBoxConfig: CheckboxConfig = {},
  searchParams = {}
): CheckboxState => {
  const initialState: CheckboxState = {};
  for (const [key, value] of Object.entries(checkBoxConfig)) {
    initialState[key] = value.defaultValue || false;
  }
  return initialState;
};

export default getInitialCheckBoxState;
