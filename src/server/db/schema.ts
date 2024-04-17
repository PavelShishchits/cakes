import { serial, text, pgTableCreator } from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `cake_${name}`);

export const ProductsTable = createTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});
