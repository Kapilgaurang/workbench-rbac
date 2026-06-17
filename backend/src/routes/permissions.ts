import express from "express";
import { permissions } from "../data/permissions";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(permissions);
});

export default router;