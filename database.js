const mongoose = require("mongoose");
const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://Hamed_6:pass@clusterduck.wp9mx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );
  console.log(`mongo connected: ${conn.connection.host}`);
};
module.exports = connectDB;
