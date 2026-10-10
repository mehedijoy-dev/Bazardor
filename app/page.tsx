import { getProducts } from "@/lib/api";
import { formatPrice, UNIT_LABEL } from "@/lib/bn";

export default async function Home() {
  const products = await getProducts();
  return (
    <main className="p-6">
      {products.slice(0, 5).map((p) => (
        <p key={p.id}>
          {p.image} {p.nameBn} | {UNIT_LABEL[p.unit]} | {formatPrice(p.today)}
        </p>
      ))}
    </main>
  );
}
