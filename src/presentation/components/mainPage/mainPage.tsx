import HomePageTitle from "src/presentation/components/mainPage/mainPageTitle";
import Converters from "src/presentation/components/mainPage/conversionUi/converters";
import Benefits from "src/presentation/components/mainPage/benefits";
import { ConverterAlgo } from "src/services/converters/types";

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
