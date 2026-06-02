import "dotenv/config";
import process from "node:process";

// Definimos o objeto de configuração diretamente exportando-o no formato exigido
export default {
  schema: "prisma/schema.prisma",
  datasource: {
    url: process.env["DATABASE_URL"] || "",
  },
};