import express from "express";
import customerRoutes from "./customer/customer.route.js";

const app = express();
// make app understand json
app.use(express.json());

// db connection

// register routes
app.use(customerRoutes);

const port = 8000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
