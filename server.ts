import { config } from "./src/config/config";
import app from "./src/app";
import connctDB from "./src/config/db";

const startServer = async () => {

  //connect database
  await connctDB();

  const port = config.port || 3000;

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

startServer();
