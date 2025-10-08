import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ quiet: true });
const uri = process.env.MONGO_URI || "mongodb://localhost:27017/mi_base";
mongoose.connect(uri)
    .then(() => console.log("✅ Conectado a MongoDB correctamente"))
    .catch((err) => console.error("❌ Error al conectar con MongoDB:", err));
