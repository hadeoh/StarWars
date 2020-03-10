
import "@babel/polyfill"; 
import express from "express";
import cookieParser from "cookie-parser";
import movieRouter from '../server/routes/movies'
 
const app = express();

const PORT = process.env.PORT || 3000;

// if (config.env === "development") {
//   app.use(logger("dev"));
// }
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (_req, res) =>
  res.status(200).json({
    statusCode: 200,
    status: "success",
    message: "Welcome to BankNow API."
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/api/v1/', movieRouter);

export default app;
 