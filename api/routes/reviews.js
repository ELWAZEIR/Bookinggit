import { Router } from "express";
import { createReview, getAllReviews } from "../controllers/reviews.js";

const router = Router();

router.post("/:hotelid", createReview);
router.get("/:id", getAllReviews);

export default router;
