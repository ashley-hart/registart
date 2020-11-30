const jwt = require("jsonwebtoken");

/* Next is how we move on to whatever function comes after the authentication process. */
const auth = (req, res, next) => {
  try {
    const token = req.header("x-auth-token");

    // If there is not a token, throw a "not authorized" status.
    if (!token)
      res.status(401).json({ msg: "No authentication token, access denied!" });
    
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified)
        res.status(401).json({ msg: "Token verification failed, access denied!" });

    req.user = verified.id;
    // console.log("verified.id: " + req.user);
    next(); 

  } catch (err) {
    console.log("Authentication error: " + err.message);
    res.status(500).json({error: err.message});
  }
};

module.exports = auth;