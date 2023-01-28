import express from "express";
import {
  updateUser,
  deleteUser,
  getAllUsers,
  getUserById,
} from "../controllers/users.js";
import {
  verifyIsAdmin,
  verifyToken,
  verifyUser,
} from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("hello user , you are logged in");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user , you are logged in and you can delete your account");
// });

// router.get("/checkadmin/:id", verifyIsAdmin, (req, res, next) => {
//   res.send("hello admin , you are logged in and you can delete all account");
// });
router.put("/:id", verifyUser, updateUser);

router.delete("/:id", deleteUser);

router.get("/:id", verifyUser, getUserById);

// router.get("/", verifyIsAdmin, getAllUsers); //any verify by error fel dashboard
router.get("/", getAllUsers);

export default router;
