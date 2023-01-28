import express from "express";
import {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoomById,
  getAllRooms,
  updateRoomAvailability,
} from "../controllers/rooms.js";
import { verifyIsAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/:hotelid", createRoom);

router.put("/:id", verifyIsAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

router.delete("/:id/:hotelid", deleteRoom);

router.get("/:id", getRoomById);

router.get("/", getAllRooms);

export default router;
