const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;

//added this due to tailwind form in profile.ejs
//tailwind.config.js
//module.exports = {
  // ...
 // plugins: [
    // ...
   // require('@tailwindcss/forms'),
//  ],
//}