import express from "express";
import { getVendedores } from "../controllers/vendedoresController";

const router = express.Router();

router.get("/vendedores", getVendedores);

export default router;
