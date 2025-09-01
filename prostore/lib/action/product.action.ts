"use server";
import sampleData from "@/db/sample-data";

export async function getProductBySlug(slug: string) {
  return sampleData.products.find((product) => product.slug === slug);
}
