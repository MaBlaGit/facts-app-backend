import "dotenv/config";
import app from "./app";

const APP_URL = process.env.URL_DEV;
const PORT = process.env.PORT;

app.listen(PORT, () =>
  console.log(`REST API server ready at: ${APP_URL}:${PORT}`)
);
