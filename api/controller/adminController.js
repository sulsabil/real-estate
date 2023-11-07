import Listing from "../models/listing.js";
import User from "../models/user.js";

export const userNumber = async (req, res, next) => {
  try {
    const estimate = await User.estimatedDocumentCount();
    console.log(
      `Estimated number of documents in the user collection: ${estimate}`
    );
    res.status(200).json({ estimate });
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const result = await User.find();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;

    const user = await User.findByIdAndRemove(userId);

    if (user) {
      res
        .status(200)
        .json({ success: true, message: "User deleted successfully." });
    } else {
      res.status(404).json({ success: false, error: "User not found." });
    }
  } catch (error) {
    next(error);
  }
};

export const getLists = async (req, res, next) => {
  try {
    const result = await Listing.find();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const deleteList = async (req, res, next) => {
  try {
    const listId = req.params.listId;

    const list = await Listing.findOneAndDelete({ _id: listId });

    if (list) {
      res
        .status(200)
        .json({ success: true, message: "Listing deleted successfully." });
    } else {
      res.status(404).json({ success: false, error: "Listing not found." });
    }
  } catch (error) {
    next(error);
  }
};

export const updateRole = async (req, res, next) => {
  const userId = req.params.userId;
  const newRole = req.body.role;

  try {
   
    const user = await User.findByIdAndUpdate(userId, { role: newRole });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    return res.json({ success: true, message: 'User role updated successfully' });
  } catch (error) {
    next(error)
  }
};