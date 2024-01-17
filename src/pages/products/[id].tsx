import { useRouter } from "next/router";

export default function Products() {
  const { query, } = useRouter();











  return (
    <>
      <h1>1 - Sorvete</h1>
      <h1>{JSON.stringify(query)}</h1>
    </>
  );
}