import { db } from "./index";

export async function getProducts() {
  try {
    if (db === null || db.query === null || db.query.ProductsTable === null) {
      throw new Error("Database or table is not initialized");
    }

    return await db.query.ProductsTable.findMany();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
