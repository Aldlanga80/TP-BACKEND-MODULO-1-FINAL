Trabajo Practico Backend Modulo 1 - CRUD con MongoDB y TypeScript

Descripción del proyecto

Para este proyecto, implementaremos CRUD (Crear, Leer, Actualizar, Eliminar) usando MongoDB, Mongoose y TypeScript sin crear una API o un servidor HTTP.
El objetivo principal es demostrar el uso correcto de Mongoose para el procesamiento de datos en bases de datos NoSQL mediante la implementación de programación asincrónica con Async/Await.

Para este trabajo use Producto, con un esquema que incluye los campos mas relevantes como: nombre, precio, categoria y stock.


-----------------------------------------------------

Tecnologia utilizada:

⭕Node.js
⭕TypeScript
⭕MongoDB
⭕Mongoose
⭕TSX (para ejecutar TypeScript sin compilacion previa)

-----------------------------------------------------

Estructura del Proyecto

TP-BACKEND-MODULO-1-FINAL
|_src/
|   |_database/
|   |  |_mongo.ts *conexion a la base de datos MongoDB
|   |
|   |_models/
|   |   |_product.model.ts *definicion del esquema Product
|   |
|   |_services/
|   |   |_product.service.ts *Funciones CRUD con mongoose
|   |
|   |_index.ts *Ejecucíon principal y prueba del CRUD
|
|_tsconfig.json
|_package.json
|_README.md

ESTE ES LA ESTRUCTURA PRINCIPAL.

-----------------------------------------------------

Operaciones Implementadas con CRUD

-Create:	createProduct(data)	Crea un nuevo producto en la base de datos.

-Read (All):	getProducts()	Obtiene todos los productos almacenados.

-Read (By ID):	getProductById(id)	Busca un producto por su ID.

-Update:	updateProduct(id, data)	Actualiza los datos de un producto existente.

-Delete:	deleteProduct(id)	Elimina un producto de la base de datos.


------------------------------------------------------

Ejecución del proyecto

1️⃣ Clonar el repositorio
git clone https://github.com/Aldlanga80/TP-BACKEND-MODULO-1-FINAL.git

2️⃣ Instalar dependencias
npm install

3️⃣ Configurar la conexión a MongoDB

En el archivo src/database/mongo.ts, asegurarse de tener una cadena de conexión válida, por ejemplo:

mongoose.connect("mongodb://127.0.0.1:27017/crud_ts_mongo");

4️⃣ Ejecutar el proyecto

npm run dev

°Esto ejecutará el archivo src/index.ts, que contiene las pruebas de cada operación CRUD.


------------------------------------------------------

AUTOR

-Aldo Langa
-Octubre 2025
-Proyecto Final – Módulo 1 (Backend con TypeScript y MongoDB)