export const listUser = (req, res) => {
  // code body
  res.json({message: "this is list ALL user"})
};

export const readUser = (req,res) => {
  res.json({message: "This is read user"})
}

export const createUser = (req,res) =>{
  res.json({message: "this is create user"})
}

export const updateUserRole = (req,res) =>{
  res.json({message: "this is update user role"})
}

export const deleteUserRole = (req,res) =>{
  res.json({message: "this is delete user role"})
}