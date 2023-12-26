import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'


import { readUser, createUser,readPerticularUser, updateUser, updateSmallChangesUser, deleteUser}  from '../server/controllers/functions.js'


const app = express()
const db= "mongodb://localhost:27017/form-database"
mongoose.connect(db)
    .then(() => console.log("connected"))
    .catch(err => console.log(`Error: ${err}`))
    

app.use(cors())
app.use(express.json())

app.get('/', readUser)
    app.post('/', createUser)
    app.put('/:id',updateUser)
    app.get('/:id', readPerticularUser)
    app.patch('/:id', updateSmallChangesUser)
    app.delete('/:id', deleteUser)    
app.listen(8989, console.log("server is running on port 8989"))



// this.app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//     res.header('Accept-Encoding', 'gzip');
//     //intercepts OPTIONS method
//     if ('OPTIONS' === req.method) {
//       //respond with 200
//       res.sendStatus(200);
//     }
//     else {
//       //move on
//       next();
//     }
//   })