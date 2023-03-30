import HomePageTitle from "src/view/screens/mainPage/mainPageTitle";
import Converters from "src/view/screens/mainPage/conversionUi/converters";
import Benefits from "src/view/screens/mainPage/benefits";
import { ConverterAlgo } from "src/library/converters/types";

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
      <HomePageTitle
        inputFile={converterAlgo.input.fileType}
        outputFile={converterAlgo.output.fileType}
      />
      <Converters input={converterAlgo.input} output={converterAlgo.output} />
      <Benefits />
    </>
  );
}