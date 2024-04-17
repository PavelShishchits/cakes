import { getProducts } from "@/server/db/queries";

export default async function Home() {
  const products = await getProducts();

  return <main>{products?.map((product) => JSON.stringify(product))}</main>;
}
