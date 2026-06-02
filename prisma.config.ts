import "dotenv/config";
import process from "node:process";


export default {
  schema: "prisma/schema.prisma",
  datasource: {
    url: process.env["DATABASE_URL"] || "",
  },
};