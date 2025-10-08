import { console } from "inspector";
import "./database/mongo.js";
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct } from "./services/product.service.js";

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

  console.log("✅ Productos creados:", producto1, producto2, "\n");

  /*------------------------------------------------*/

  const todosLosProductos = await getProducts();
  console.log("Todos los products", todosLosProductos, "\n");

  /*------------------------------------------------*/

  const productoId = producto1._id.toString();
  const productoBuscado = await getProductById(productoId);
  console.log("Producto buscado por ID:", productoBuscado, "\n");

  /*------------------------------------------------*/

  const productoActualizado = await updateProduct(productoId, {
    price: 16000,
    stock: 8,
  });
  console.log("Producto Actualizado:", productoActualizado, "\n");

  /*------------------------------------------------*/

  const productoEliminado = await deleteProduct(producto2._id.toString());
  console.log("Producto Eliminado:", productoEliminado, "\n");

  /*------------------------------------------------*/

  const productosFinales = await getProducts();
  console.log("Productos en la base de datos:", productosFinales);

}

main().catch((err) => console.error("Error en el main:", err));
