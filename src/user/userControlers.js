const jwt = require("jsonwebtoken");
const User = require("./userModel");

exports.addUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        const token = await jwt.sign({_id: newUser._id}, process.env.SECRET);
        res.status(200).send({user: newUser.username, token })
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message})
    };
};

exports.listUser = async (req, res) => {
    try {
        const user = await User.find({})
        res.status(200).send({user: user});
        console.log(movies)
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message});
    };
};


exports.login = async (req, res) =>{
    try {
        const token = await jwt.sign({_id: req.user._id}, process.env.SECRET)
        res.status(200).send({ user: req.user.username, token});
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message});
    };
};

exports.updatePassword = async (req, res) => {
    try {
        console.log("hit updatePass 1")
        const updatedUser = await User.updateOne(
            { username: req.user.username },
            { password: req.body.password }
        );
        if (updatedUser.matchedCount > 0) {
            res.status(200).send({msg: "Update successfull"});
        } else {
            throw new Error("Did not Update");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message})
    }
};

exports.deleteUser = async (req, res) => {
    try {
      const deletedUser = await User.deleteOne({
        [req.params.filterKey]: req.params.filterVal,
      });
      if (deletedUser.deletedCount > 0) {
        res.status(200).send({ msg: "Successfully removed User" });
      } else {
        throw new Error("Did not remove user");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ err: error.message });
    }
  };

