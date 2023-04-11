import mongoose from 'mongoose'; //mongosse change document to be object

export async function connect() {
  try {
    await mongoose.connect('mongodb+srv://chaudz:chauyeuai22@cluster0.l5kxahg.mongodb.net/MyCV');
    console.log('DB connected okiii!!');
  } catch (error) {
    console.log('DB connect fail !!');
  }
}
