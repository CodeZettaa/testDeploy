import mongoose from "mongoose";

const connection = () => {
  mongoose
    .connect(`mongodb+srv://ITI:ITIAdmin@cluster0.bot0ox3.mongodb.net/test`)
    .then(() => console.log("mongodb connected"))
    .catch((err) => console.log("mongodb error", err));
};

// ITIadmin
export default connection;
