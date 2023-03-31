import JsonCsv from "src/library/converters/JsonCsv";
import { ConversionUrl,ConverterAlgo } from "src/library/converters/types";

export type ConverterAlgos = {
  [index: string]: ConverterAlgo;
};

// Add new converters here
const ConverterAlgos: ConverterAlgos = {
  [ConversionUrl.JsonCsv]: JsonCsv,
};

export { ConverterAlgos };
