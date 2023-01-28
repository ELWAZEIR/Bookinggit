import Hotel from "../models/Hotel.js";
import Review from "../models/Review.js";

export const createReview = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newReview = new Review(req.body);

  try {
    const savedReview = await newReview.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { reviews: savedReview._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedReview);
  } catch (err) {
    next(err);
  }
};

export const getAllReviews = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.reviews.map((review) => {
        return Review.findById(review);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
