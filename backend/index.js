const cors = require("cors");
const express = require("express");
const stripe = require("stripe")(
  "sk_test_51LTVZEK8GvssJyAyf4fzI1UFo0HXGlT2g9Srf4P9MAtTYlkQN7gf0lleLOh5CaMh7Fqn4U0mbcrmLn0JEivPO6a500cvDOXZlm"
);

const { v4: uuidv4 } = require("uuid");

const app = express();

// middleware

app.use(express.json());
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.send("IT WORKS");
});

app.post("/payment", (req, res) => {
  const { product, token } = req.body;
  console.log(product);
  console.log(product.price);
  //   const idempotencyKey = uuidv4.v4();

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges
        .create(
          {
            amount: product.price * 100,
            currency: "usd",
            customer: customer.id,
            receipt_email: token.email,
            description: `purchase of product.name`,
            shipping: {
              name: token.card.name,
              address: {
                country: token.card.address_country,
              },
            },
          }
          //   { idempotencyKey }
        )
        .then((result) => res.status(200).json(result))
        .catch((err) => console.log(err));
    });
});
// listen
app.listen(8283, () => console.log("LISTENING AT PORT 8282"));
