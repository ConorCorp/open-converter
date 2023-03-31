import { ConverterAlgo } from "src/library/converters/types";
import Benefits from "src/view/screens/mainPage/benefits";
import ConverterPageTitle from "src/view/screens/mainPage/converterPageTitle";
import Converters from "src/view/screens/mainPage/converters";

/**
 * Main UI page
 * @param converterAlgo ConverterUrl object defining input/output
 */
export default function ConverterPage({
  converterAlgo,
}: {
  converterAlgo: ConverterAlgo;
}) {
  return (
    <>
      <ConverterPageTitle
        inputFile={converterAlgo.input.fileType}
        outputFile={converterAlgo.output.fileType}
      />
      <Converters input={converterAlgo.input} output={converterAlgo.output} />
      <Benefits />
    </>
  );
}
