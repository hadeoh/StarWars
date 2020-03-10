import express, { Router } from "express";
import { getMovies } from "../controller/movies";

const router = Router();

router.get("/movies", async (_req, res) => {
  try {
    const data = await getMovies();

    if (data.length === 0) {
      return res.status(204).json({ data });
    }

    res
      .status(200)
      .json({ message: "All movies retrieved successfully", data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
