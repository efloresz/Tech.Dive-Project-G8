// import user model 
const User = require('api/node_modules');

const getUser = async (req, res) => {
  try {
    // fetch user data from database 
    const userData = await User.findOne({/*query*/});
    return res.status(200).json({
      success: true,
      data: userData,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      sucess: false,
      message: 'Internal Server Error',
    })
  }

}
module.exports = {
  getUser,
};
