# Open Converters

# Adding A New Converter

## 1. Add your `ConverterAlgo` file

- To add your one-way converter, add CamelCase `.ts` file.
  - i.e. for a JSON -> CSV converter, name it `JsonCsv.ts`.
  - If you want a CSV -> JSON converter, add another file for it.
- This file needs to contain and export a`ConverterAlgo` object
  - See `types.ts` for API info or `JsonCsv.ts` as an example.

## 2. Update `types.ts`

1. Add the name the name of your conversion to `ConversionUrl`s enum in `types.ts`.
2. If you are adding a new `FileType` add it to the `FileType` enum in `types.ts`. You can reuse `FileType` names from here, for example, `JSON` already exists so you can use that and add you're new `FileType`.

## 3. Update `converters.ts`

1. Connect your `ConversionUrl` to your `ConverterAlgo` configuration in `converters.ts` in the variable `ConverterAlgos`.
