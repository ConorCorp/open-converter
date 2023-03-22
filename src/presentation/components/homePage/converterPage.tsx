import HomePageTitle from "src/presentation/components/homePage/homePageTitle";
import Converter from "src/presentation/components/homePage/converter";
import Benefits from "src/presentation/components/homePage/benefits";

export default function ConverterPage({ converter }) {
  return (
    <>
      <HomePageTitle
        inputFile={converter.inputFile}
        outputFile={converter.outputFile}
      />
      <Converter
        inputFile={converter.inputFile}
        outputFile={converter.outputFile}
      />
      <Benefits />
    </>
  );
}
