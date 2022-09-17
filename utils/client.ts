import sanityClient from "@sanity/Client";

export const client = sanityClient({
  projectId: "f9njd0ic",
  dataset: "production",
  apiVersion: "2022-09-17",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
