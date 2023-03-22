// Add new FileTypes for conversions here
export enum FileType {
  JSON = "JSON",
  CSV = "CSV",
}

// Add new conversion Urls here
export enum ConversionUrl {
  JsonCsv = "JsonCsv",
}

export type ConverterChangableConfig = {
  checkboxes?: { [label: string]: { defaultValue?: boolean } };
  numberInputs?: {
    [label: string]: {
      defaultValue?: number;
      minNumber?: number;
      maxNumber?: number;
    };
  };
};

export type ConverterConfig = {
  fileType: FileType;
  textBoxPlaceholder: string;
  config?: ConverterChangableConfig;
};

export type ConverterAlgo = {
  url: string;
  input: ConverterConfig;
  output: ConverterConfig;
};
