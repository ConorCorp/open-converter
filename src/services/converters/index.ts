import { ConverterAlgo, ConversionUrl } from "src/services/converters/types";
import JsonCsv from "src/services/converters/JsonCsv";

export type ConverterAlgos = {
  [index: string]: ConverterAlgo;
};

// Add new converters here
const ConverterAlgos: ConverterAlgos = {
  [ConversionUrl.JsonCsv]: JsonCsv,
};

export { ConverterAlgos };
