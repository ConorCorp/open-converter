import { ConverterAlgo, ConversionUrl } from "src/library/converters/types";
import JsonCsv from "src/library/converters/JsonCsv";

export type ConverterAlgos = {
  [index: string]: ConverterAlgo;
};

// Add new converters here
const ConverterAlgos: ConverterAlgos = {
  [ConversionUrl.JsonCsv]: JsonCsv,
};

export { ConverterAlgos };
