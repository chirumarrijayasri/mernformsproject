import users from '../models/model.js'

export const readUser = async (req, res) => {
    try {
        const readUser =await users.find({})
        res.json(readUser)
    } catch(err) {
        res.send(err)
    }
}

export const createUser = async(req,res) => {
    const createUser = new users(req.body)
    res.send("user created successfully")
    try {
         await createUser.save()
        
    } catch(err) {
        res.send(err)
    }
   
}

export const readPerticularUser = async(req, res) => {
    const getUser = await users.findById(req.params.id)
    res.json(getUser)

}

export const updateUser = async(req,res) => {
    let id = req.params.id
    let newUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        age: req.body.age,
        profile: req.body.profile,
        bio: req.body.bio,
        interest: req.body.interest
    }
    try {
        const result = await users.findByIdAndUpdate(id, newUser, {new: true})
        res.send(result)

    } catch(err) {
        res.status(200).send("internal server error")
    }
}

export const updateSmallChangesUser = async (req, res) => {
    try {
        const getUser = await users.findById(req.params.id);

        if (!getUser) {
            return res.status(404).json({ message: "User not found" });
        }

        getUser.firstName = req.body.firstName;
   

        await getUser.save();
        res.json(getUser);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
};

export const deleteUser = async (req, res) => {
    try {
      const deletedUser = await users.findByIdAndDelete(req.params.id);
  
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({ message: 'User deleted successfully', deletedUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };


