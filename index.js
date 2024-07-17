const express = require("express");
require("dotenv").config();
const PORT = process.env.SERVER_PORT;
const usersRoutes = require("./routes/users.route");

const app = express();
app.use(express.json());

app.use("/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
