import { Container } from "@mui/material";
import { redirect, useLoaderData } from "react-router-dom";
import { ConverterUrls } from "src/services/converter";
import ConverterPage from "../components/homePage/converterPage";

// How to use loaders
// 1. Create a loader function that would pull the data required to render page.
// 2. Add that loader to its router element
// 3. Call useLoaderData() to access params
export async function converterSelectionLoader({ params }: { params: any }) {
  return Object.keys(ConverterUrls).includes(params.converterUrl)
    ? params.converterUrl
    : redirect(`/${ConverterUrls.JsonCsv.url}`);
}

export default function Root() {
  const converterUrl = useLoaderData();

  return (
    <Container>
      <ConverterPage converter={ConverterUrls[converterUrl]} />
    </Container>
  );
}
