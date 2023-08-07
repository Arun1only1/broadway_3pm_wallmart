import express from "express";

const router = express.Router();

// add =>POST
// read=>GET
// edit=>PUT
// delete =>DELETE

let customers = [];

// add a customer
router.post("/customer/add", (req, res) => {
  const newCustomer = req.body;

  customers.push(newCustomer);

  return res.status(200).send({ message: "Customer added successfully." });
});

// get all customers
router.get("/customers", (req, res) => {
  return res.status(200).send(customers);
});

// find customer by id
router.get("/customer/details/:id", (req, res) => {
  // extract id from params
  const customerId = Number(req.params.id);

  // find if user exists in customer array
  const customer = customers.find((item) => {
    if (item.id === customerId) {
      return item;
    }
  });

  // if not user, throw error
  if (!customer) {
    return res.status(404).send({ message: "Customer does not exist." });
  }

  // if user, send user info in response
  return res.status(200).send(customer);
});

export default router;
