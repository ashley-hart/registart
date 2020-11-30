const router = require("express").Router();
let User = require("../models/User");
const auth = require("../middleware/auth");
const jwt = require("jsonwebtoken");

router.route("/").get(async (req, res) => {
  User.find()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/login").post(async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    // See if an account with the username provided exists/
    const user = await User.findOne({ username: username });
    if (!user)
      return res
        .status(400)
        .json({ msg: "No account with this username has been registered." });

    // Check if the two passwords match
    const isMatch = user.password == password;
    // console.log("isMatch: " + isMatch);
    if (!isMatch)
      return res.status(400).json({ msg: "Invalid login credentials." });

    // Generate a token for the user.
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    console.log("token: " + token);

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
      },
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Note: This can be used to check if users have been deleted.
router.post("/tokenIsValid", async (req, res) => {
  try {
    console.log("Header token: " + req.header("x-auth-token"));
    // Do we have a token?
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    // console.log("Verified = " + jwt.verify(token, process.env.JWT_SECRET));
    // Is our token verified?
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    // Do we have a verified user in the system?
    const user = await User.findById(verified.id);
    if (!user) return res.json(false);

    // If we pass all of these criteria, return true.
    return res.json(true);

  } catch (err) {
    console.log("Failed out. :(");
    res.status(500).json({ error: err.message });
  }
});

// auth here
router.get("/loggedin", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json(user);
});

module.exports = router;
