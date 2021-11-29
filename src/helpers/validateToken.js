import jwt from "jsonwebtoken";

export default ValidatedToken = (req, res, next) => {
  let token = req.header("xx-token");
  // thuật toán

  if (!token) {
    return res.status(401).json({
      resp: false,
      msg: "There is not Token in the request",
    });
  }
  try {
    const { uidPerson } = jwt.verify(token, process.env.APP_KEY_JWT);
    // mã hóa
    req.uidPerson = uidPerson;
    next();
    //  tính logic 
  } catch (err) {
    return res.status(401).json({
      resp: false,
      msg: err,
    });
  }
};
