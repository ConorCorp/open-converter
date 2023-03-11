import { Converter } from "src/services/converter";

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

const JsonCsv: Converter = {
  textInputPlaceholders: {
    input: inputPlaceholder,
    output: outputPlaceholder,
  },
};

export default JsonCsv;
