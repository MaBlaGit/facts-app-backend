import { Request, Response } from "express";
import prisma from "../utils/database";

export const getAllFacts = async (
  req: Request,
  res: Response
): Promise<void> => {
  const facts = await prisma.fact.findMany();
  res.json(facts);
};

export const getFactById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const fact = await prisma.fact.findUnique({
    where: { id: Number(id) },
  });
  res.json(fact);
};

export const createFact = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { text, source, category } = req.body;
  const new_fact = await prisma.fact.create({
    data: {
      text,
      source,
      category,
    },
  });
  res.json(new_fact);
};

export const updateFact = async (
  req: Request,
  res: Response
): Promise<void> => {
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
};

export const deleteFact = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const fact_to_delete = await prisma.fact.delete({
    where: { id: Number(id) },
  });
  res.json(fact_to_delete);
};

export const voteInteresting = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { action } = req.query;

  const increment = action === "increment" ? 1 : -1;

  const updatedFact = await prisma.fact.update({
    where: { id: Number(id) },
    data: {
      votes_interesting: {
        increment,
      },
      updated_at: new Date(),
    },
  });

  res.json(updatedFact);
};

export const voteMindBlowing = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { action } = req.query;

  const increment = action === "increment" ? 1 : -1;

  const updatedFact = await prisma.fact.update({
    where: { id: Number(id) },
    data: {
      votes_mind_blowing: {
        increment,
      },
      updated_at: new Date(),
    },
  });

  res.json(updatedFact);
};

export const voteFalse = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { action } = req.query;

  const increment = action === "increment" ? 1 : -1;

  const updatedFact = await prisma.fact.update({
    where: { id: Number(id) },
    data: {
      votes_false: {
        increment,
      },
      updated_at: new Date(),
    },
  });

  res.json(updatedFact);
};
