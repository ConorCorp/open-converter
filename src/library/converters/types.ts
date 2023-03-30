// Add new FileTypes for conversions here
export enum FileType {
  JSON = "JSON",
  CSV = "CSV",
}

// Add new conversion Urls here
export enum ConversionUrl {
  JsonCsv = "JsonCsv",
}

export type CheckboxConfig = { [label: string]: { defaultValue?: boolean } };

export type ConverterChangableConfig = {
  /**
   * Checkboxes available for an input or output file.
   *
   * Ex.
   * checkboxes: { inputStartsTrue: { defaultValue: true } }
   *
   * This shows a single checkbox labelled `inputStartsTrue` with a default value of enabled.
   */
  checkboxes?: CheckboxConfig;
  /**
   * Numbered text inputs available for an input or output file.
   *
   * Ex.
   * numberedInputs: { input0to5: { defaultValue: 0, minValue: 0, maxValue: 5 } }
   *
   * This shows a single numbered input labelled `input0to5` with a default value of 0, and values allowed >= 0 & < 5.
   */
  numberInputs?: {
    [label: string]: {
      defaultValue?: number;
      minValue?: number;
      maxValue?: number;
    };
  };
};

export type ConverterConfig = {
  fileType: FileType; // Name of filetype
  textBoxPlaceholder: string; // Multiline string sample placeholder text of an example file
  config?: ConverterChangableConfig; // Configuration applied input or output
};

export type ConverterAlgo = {
  url: string; // Url of this algorithm
  input: ConverterConfig; // Input file configuration
  output: ConverterConfig; // Output (converted) file configuration
};
