import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected..."))
    .catch((error) => console.log("error in mongoDB connect -> ", error));
};

export default connectDB;
