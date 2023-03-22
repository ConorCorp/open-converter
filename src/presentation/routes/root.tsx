import { Container } from "@mui/material";
import { redirect, useLoaderData } from "react-router-dom";
import { ConverterAlgos } from "src/services/converters";
import ConverterPage from "src/presentation/components/homePage/converterPage";

/**
 * Takes the url params provided and decides what converter to show.
 * @param params url params containing params.converterUrl
 */
export async function converterUrlLoader({ params }: { params: any }) {
  if (Object.keys(ConverterAlgos).includes(params.converterUrl)) {
    // Defined Routers
    return params.converterUrl;
  } else if (params.converterUrl === undefined) {
    // Home Route
    return redirect(`/${ConverterAlgos.JsonCsv.url}`);
  } else {
    // 404'd routes
    throw new Response("Not Found", { status: 404 });
  }
}

export default function Root() {
  const converterUrl = useLoaderData() as string;

  return (
    <Container>
      <ConverterPage converterAlgo={ConverterAlgos[converterUrl]} />
    </Container>
  );
}
