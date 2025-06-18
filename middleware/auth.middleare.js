export const authCheck = (req,res,next) => {
  //code body
  console.log("this is middleware");
  next()
};
