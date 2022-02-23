const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      err &&
        res
          .status(403)
          .json({ errorCode: 101, errorMessage: "token is not valid" });
      req.user = user;
      next();
    });
  } else {
    req
      .status(401)
      .json({ errorCode: 100, errorMessage: "token does not exist" });
  }
};

const verifyTokenAndIsAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json({
        errorCode: 102,
        errorMessage: "this account is not administrator",
      });
    }
  });
};

module.exports({ verifyToken, verifyTokenAndIsAdmin });
