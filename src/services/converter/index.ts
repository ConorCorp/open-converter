import JsonCsv from "./converters/JsonCsv";

export type Converter = {
  textInputPlaceholders: {
    input: String;
    output: String;
  };
};

enum FileType {
  JSON = "JSON",
  CSV = "CSV",
}

const conversionMap: { [key: string]: Converter } = {
  JSON_CSV: JsonCsv,
};

const getTextBoxPlaceholders = (input: FileType, output: FileType) => {
  const conversion = `${input}_${output}`;

  try {
    return conversionMap[conversion].textInputPlaceholders;
  } catch (e: any) {
    throw `No placeholder for conversion: ${conversion}`;
  }
};

export { FileType, getTextBoxPlaceholders };
