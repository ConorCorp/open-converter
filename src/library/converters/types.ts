// Add new FileTypes for conversions here
export enum FileType {
  JSON = "JSON",
  CSV = "CSV",
}

// Add new conversion Urls here
export enum ConversionUrl {
  JsonCsv = "JsonCsv",
}

class SettingInput {
  label: string;

  constructor(label: string) {
    this.label = label;
  }
}

/**
 * Checkboxes available for an input or output file.
 *
 * Ex.
 * label: "inputStartsEnabled", value: true
 *
 * This shows a single checkbox labelled `inputStartsEnabled` with a default value of enabled.
 */
export class CheckboxSetting extends SettingInput {
  value: boolean;

  constructor(label: string, value: boolean = false) {
    super(label);
    this.value = value;
  }
}

/**
 * Numbered text inputs available for an input or output file.
 *
 * Ex.
 * label: "inputBetween1and5", value: 1, minValue: 1, maxValue: 5
 *
 * This shows a single numbered input labelled `inputBetween1and5` with a default value of 1, and values allowed >= 1 & <= 5.
 */
export class NumberInputSetting extends SettingInput {
  value?: number;
  minValue?: number | undefined;
  maxValue?: number | undefined;

  constructor(
    label: string,
    value: number = 0,
    minValue: number | undefined = undefined,
    maxValue: number | undefined = undefined
  ) {
    super(label);
    this.value = value;
    this.minValue = minValue;
    this.maxValue = maxValue;
  }
}

export type FileSettingFromConfig = CheckboxSetting | NumberInputSetting;

export type FileSettingsFromConfig = FileSettingFromConfig[];

/**
 * File Settings Config allows you to couple and order settings under 1 heading, to
 * be shown to users in the UI.
 *
 * Ex.
 * "Section Label":  [CheckboxSetting("Name")]
 *
 * This shows a single numbered input labelled `input0to5` with a default value of 0, and values allowed >= 0 & < 5.
 */
export type FileSettingsSections = {
  [label: string]: FileSettingsFromConfig;
};

export type ConverterConfig = {
  fileType: FileType; // Name of filetype
  textBoxPlaceholder: string; // Multiline string sample placeholder text of an example file
  config?: FileSettingsSections; // Configuration applied input or output
};

export type ConverterAlgo = {
  url: string; // Url of this algorithm
  input: ConverterConfig; // Input file configuration
  output: ConverterConfig; // Output (converted) file configuration
};
