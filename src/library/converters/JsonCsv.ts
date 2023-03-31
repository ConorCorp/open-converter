import {
  CheckboxSetting,
  ConverterAlgo,
  FileType,
  NumberInputSetting,
} from "src/library/converters/types";

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
      Configuration: [
        new CheckboxSetting("inputStartsFalse"),
        new CheckboxSetting("inputStartsTrue", true),
        new NumberInputSetting("inputForNumbers", 2),
        new NumberInputSetting("inputBetween0-1", 0, 0, 1),
      ],
    },
  },
  output: {
    fileType: FileType.CSV,
    textBoxPlaceholder: outputPlaceholder,
    config: {
      Configuration: [
        new CheckboxSetting("outputStartsFalse"),
        new CheckboxSetting("outputStartsTrue", true),
        new NumberInputSetting("outputForNumbers", 2),
        new NumberInputSetting("outputBetween0-1", 0, 0, 1),
      ],
    },
  },
};

export default JsonCsv;
