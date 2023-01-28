import express from "express";
import {
  countByType,
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotelById,
  hotelsCountByCity,
  updateHotel,
  getHotelRooms,
  getAllByType,
} from "../controllers/hotels.js";
import { verifyIsAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//admin verify is not working in dashboard

// router.post("/", verifyIsAdmin, createHotel);

// router.put("/:id", verifyIsAdmin, updateHotel);

// router.delete("/:id", verifyIsAdmin, deleteHotel);

router.post("/", createHotel);

router.put("/:id", updateHotel);

router.delete("/:id", deleteHotel);

router.get("/find/:id", getHotelById);
router.get("/countByCity", hotelsCountByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);
router.get("/", getAllHotels);
router.get("/all", getAllByType);

export default router;
