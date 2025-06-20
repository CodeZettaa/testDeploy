require("dotenv").config();
import mongoose from "mongoose";

const connection = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("mongodb connected"))
    .catch((err) => console.log("mongodb error", err));
};

// ITIadmin
export default connection;
