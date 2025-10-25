import express from "express";
import loggerMiddleware from "../middleware/loggerMiddleware.js";
import mainRoutes from "../routes/mainRoutes.js";

const setupApp = (app) => {
  app.use(express.json());
  app.use(loggerMiddleware);
  app.use("/", mainRoutes);
};

export default setupApp;
