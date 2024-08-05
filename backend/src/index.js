const app = require("./app");
const config = require("./utils/config");


const startServer = () => {
  try {
    app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}`));
  } catch (error) {
    console.log("Could not ");
  }
}

startServer();
