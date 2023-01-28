import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    //ENCRYPT PASSWORD
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();

    res.status(200).send("User Has Been Created");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    //check username if exist login
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User Not Found"));

    //check password if correct or wrong
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username"));

    //create jwt token with userId and isAdmin attribute
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT //secret key can be changed from .env
    );

    //destructing user data and leave password and is admin away when sent user to front to save it to local storage

    const { password, isAdmin, ...otherDetails } = user._doc;
    //save token to a cookie
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (err) {
    next(err);
  }
};
