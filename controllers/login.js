import User from "../models/UserModel.js";

const signIn = async (req, res) => {
  const { email, password } = req.body;

  const validUser = await User.findOne({ email });

  if (!validUser) {
    return res.status(401).json("user not found");
  }

  const validPassword = validUser.password === password;

  console.log(validUser);

  if (!validPassword) {
    return res.status(401).json("Invalid Credentials");
  }

  res.status(200).json("SignIn Successfull");
};

export { signIn };
