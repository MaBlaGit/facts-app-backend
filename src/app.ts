import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// fetch all facts
app.get("/api/facts", async (req, res) => {
  const facts = await prisma.fact.findMany();
  res.json(facts);
});

// fetch fact
app.get(`/api/fact/:id`, async (req, res) => {
  const { id } = req.params;
  const fact = await prisma.fact.findUnique({
    where: { id: Number(id) },
  });
  res.json(fact);
});

// add fact
app.post(`/api/fact`, async (req, res) => {
  const { text, source, category } = req.body;
  const new_fact = await prisma.fact.create({
    data: {
      text,
      source,
      category,
    },
  });
  res.json(new_fact);
});

// update fact
app.put("/api/fact/update/:id", async (req, res) => {
  const { id } = req.params;
  const { text, source, category } = req.body;

  const data: Record<string, string | Date> = {};

  if (text !== undefined) {
    data.text = text;
  }
  if (source !== undefined) {
    data.source = source;
  }
  if (category !== undefined) {
    data.category = category;
  }

  data.updated_at = new Date();

  const fact_to_update = await prisma.fact.update({
    where: { id: Number(id) },
    data,
  });

  res.json(fact_to_update);
});

// delete fact
app.delete(`/api/fact/:id`, async (req, res) => {
  const { id } = req.params;
  const fact_to_delete = await prisma.fact.delete({
    where: { id: Number(id) },
  });
  res.json(fact_to_delete);
});

app.listen(3000, () =>
  console.log("REST API server ready at: http://localhost:3000")
);
