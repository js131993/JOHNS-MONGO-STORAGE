const { User, Thought } = require("../models");

module.exports = {
  // Get all user
  async getuser(req, res) {
    try {
      const user = await User.find();
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a User
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.UserId }).select(
        "-__v"
      );

      if (!user) {
        return res.status(404).json({ message: "No User with that ID" });
      }

      res.json(User);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a User
  async createUser(req, res) {
    try {
      const User = await User.create(req.body);
      res.json(User);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a User
  async deleteUser(req, res) {
    try {
      const User = await User.findOneAndDelete({
        _id: req.params.UserId,
      });

      if (!User) {
        res.status(404).json({ message: "No User with that ID" });
      }

        await Thought.deleteMany({ _id: { $in: user.thoughts } });
        //thoughts is an array of ID
      res.json({ message: "User and Thoughts deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a User
  async updateUser(req, res) {
    try {
      const User = await User.findOneAndUpdate(
        { _id: req.params.UserId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!User) {
        res.status(404).json({ message: "No User with this id!" });
      }

      res.json(User);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
