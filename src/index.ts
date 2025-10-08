import "./database/mongo.js";
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct } from "./services/product.service";

async function main() {
  console.log("Iniciando con MongoDB y TypeScriptn");

  const producto1 = await createProduct({
    name: "Mouse Gamer",
    price: 22000,
    category: "Tecnologia",
    stock: 50,
  });

  const producto2 = await createProduct({
    name: "Teclado Inalambrico",
    price: 30000,
    category: "Tecnologia",
    stock: 30,
  });

  const producto3 = await createProduct({
    name: "Cocina Electrica",
    price: 1500000,
    category: "Eletrodomestico",
    stock: 10,
  });


}

