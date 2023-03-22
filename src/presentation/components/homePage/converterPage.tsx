import HomePageTitle from "src/presentation/components/homePage/homePageTitle";
import Converters from "src/presentation/components/homePage/converters";
import Benefits from "src/presentation/components/homePage/benefits";
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
