import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { SnackData } from "./models/SnackData";
import { CustomerData } from "./models/CustomerData";
import { PaymentData } from "./models/paymentData";
import CheckoutService from "./services/CheckoutService";

dotenv.config();

const cors = require("cors");
const app: Express = express();
const port = process.env.PORT || 5000;
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Ok!");
});

app.get("/snacks", async (req: Request, res: Response) => {
  const { snack } = req.query;

  if (!snack) return res.status(400).send({ error: "Snack is required" });

  const snacks = await prisma.snack.findMany({
    where: {
      snack: {
        equals: snack as string,
      },
    },
  });

  res.send(snacks);
});

app.get("/orders/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const order = await prisma.order.findUnique({
    where: {
      id: parseInt(id),
    },
    include: { customer: true, OrderItem: { include: { snack: true } } },
  });
  if (!order) return res.status(404).send({ error: "Order not found!" });
  res.send(order);
});

interface CheckoutRequest extends Request {
  body: {
    cart: SnackData[];
    customer: CustomerData;
    payment: PaymentData;
  };
}

app.post("/checkout", async (req: CheckoutRequest, res: Response) => {
  const { cart, customer, payment } = req.body;

  const checkoutService = new CheckoutService();
  checkoutService.process(cart, customer, payment);

  res.send("Success!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
