import express from "express";
import {
  getAllFacts,
  getFactById,
  createFact,
  updateFact,
  deleteFact,
} from "../controllers/factController";

const router = express.Router();

router.get("/", getAllFacts);
router.get("/:id", getFactById);
router.post("/", createFact);
router.put("/update/:id", updateFact);
router.delete("/:id", deleteFact);

export default router;
