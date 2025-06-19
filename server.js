import express from "express";
import cors from "cors"
import morgan from "morgan"
import userRouter from "./routes/user.js"
import authRouter from "./routes/auth.js"
import error from "./utils/error.js";
import notFound from "./utils/notFound.js";

const app = express()

//Basic middleware
app.use(cors()) // Allow cross domains
app.use(morgan('dev')) // Show logs
app.use(express.json()) // for read body

// Routing GET, POST, PUT, PATCH, DELETE
app.get('/', (req,res)=>{
  // code body
  res.json({message: "hello CC20"})
})

app.use("/api", userRouter)
app.use("/auth", authRouter)

// Error Handling
app.use(error)

app.use(notFound)

const PORT = 8888
//Start Server
app.listen(PORT,()=>console.log(`server is running on port http://localhost:${PORT}`))
