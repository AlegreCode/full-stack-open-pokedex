import express from "express";
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;

app.use(app.static("dist"));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
