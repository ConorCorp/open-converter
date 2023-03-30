import { ConverterAlgo, FileType } from "src/library/converters/types";

const inputPlaceholder = `{
  "Level1Key": {
    "Level2Key": "Level2Value",
  },
  "Nice": {
    "Face": "you have there."
  }
}`;

const outputPlaceholder = `Level1Key,Nice
Level2Key,Face
Level2Value,you have there.
`;

const JsonCsv: ConverterAlgo = {
  url: "JsonCsv",
  input: {
    fileType: FileType.JSON,
    textBoxPlaceholder: inputPlaceholder,
    config: {
      checkboxes: {
        inputStartsFalse: {},
        inputStartsTrue: { defaultValue: true },
      },
      numberInputs: {
        inputForNumbers: {
          defaultValue: 2,
        },
      },
    },
  },
  output: {
    fileType: FileType.CSV,
    textBoxPlaceholder: outputPlaceholder,
    config: {
      checkboxes: {
        outputStartsFalse: {},
        outputStartsTrue: { defaultValue: true },
      },
      numberInputs: {
        outputForNumbers: {
          defaultValue: 2,
        },
      },
    },
  },
};

export default JsonCsv;
