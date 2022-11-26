import mongoose from 'mongoose'

const MONGODB_URI = "mongodb+srv://l19100155:Aquiles110221@cluster0.j4fi8hi.mongodb.net/?retryWrites=true&w=majority"

export async function connectToDB(){
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('MongoDB connected')
  } catch (error) {
    console.log(error)
  }
}
