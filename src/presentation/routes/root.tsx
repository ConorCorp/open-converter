import { Container } from "@mui/material";
import { Outlet, redirect, useLoaderData } from "react-router-dom";
import { ConverterUrls } from "src/services/converter";

// How to use loaders
// 1. Create a loader function that would pull the data required to render page.
// 2. Add that loader to its router element
// 3. Call useLoaderData() to access params
export async function converterSelectionLoader({ params }: { params: any }) {
  return Object.values(ConverterUrls).includes(params.converterName)
    ? params.converterName
    : redirect(`/${ConverterUrls.JsonCsv}`);
}

export default function Root() {
  const converter = useLoaderData();

  return (
    <Container>
      <Outlet />
    </Container>
  );
}
