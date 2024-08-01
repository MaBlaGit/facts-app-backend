import request from "supertest";
import app from "../app";
import prisma from "../utils/database";

beforeEach(async () => {
  await prisma.fact.deleteMany({});
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe("Fact API Endpoints", () => {
  it("should fetch all facts", async () => {
    const res = await request(app).get("/api/facts");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should create a new fact", async () => {
    const newFact = {
      text: "A new fact",
      source: "Test Source",
      category: "Test Category",
    };
    const res = await request(app).post("/api/facts").send(newFact);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("id");
    expect(res.body.text).toBe(newFact.text);
    expect(res.body.source).toBe(newFact.source);
    expect(res.body.category).toBe(newFact.category);
  });

  it("should fetch a single fact by ID", async () => {
    const newFact = await prisma.fact.create({
      data: {
        text: "Fact for fetching",
        source: "Source",
        category: "Category",
      },
    });
    const res = await request(app).get(`/api/facts/${newFact.id}`);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(newFact.id);
  });

  it("should update a fact by ID", async () => {
    const newFact = await prisma.fact.create({
      data: {
        text: "Fact for updating",
        source: "Source",
        category: "Category",
      },
    });
    const updatedData = {
      text: "Updated Fact",
      source: "Updated Source",
      category: "Updated Category",
    };
    const res = await request(app)
      .put(`/api/facts/update/${newFact.id}`)
      .send(updatedData);
    expect(res.status).toBe(200);
    expect(res.body.text).toBe(updatedData.text);
    expect(res.body.source).toBe(updatedData.source);
    expect(res.body.category).toBe(updatedData.category);
  });

  it("should delete a fact by ID", async () => {
    const newFact = await prisma.fact.create({
      data: {
        text: "Fact for deleting",
        source: "Source",
        category: "Category",
      },
    });
    const res = await request(app).delete(`/api/facts/${newFact.id}`);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(newFact.id);

    const deletedFact = await prisma.fact.findUnique({
      where: { id: newFact.id },
    });
    expect(deletedFact).toBeNull();
  });

  it("should increment interesting vote", async () => {
    const newFact = await prisma.fact.create({
      data: {
        text: "Vote fact",
        source: "Source",
        category: "Category",
      },
    });
    const res = await request(app)
      .post(`/api/facts/${newFact.id}/vote/interesting`)
      .query({ action: "increment" });
    expect(res.status).toBe(200);
    expect(res.body.votes_interesting).toBe(1);
  });

  it("should increment mind-blowing vote", async () => {
    const newFact = await prisma.fact.create({
      data: {
        text: "Vote fact",
        source: "Source",
        category: "Category",
      },
    });
    const res = await request(app)
      .post(`/api/facts/${newFact.id}/vote/mindblowing`)
      .query({ action: "increment" });
    expect(res.status).toBe(200);
    expect(res.body.votes_mind_blowing).toBe(1);
  });

  it("should increment false vote", async () => {
    const newFact = await prisma.fact.create({
      data: {
        text: "Vote fact",
        source: "Source",
        category: "Category",
      },
    });
    const res = await request(app)
      .post(`/api/facts/${newFact.id}/vote/false`)
      .query({ action: "increment" });
    expect(res.status).toBe(200);
    expect(res.body.votes_false).toBe(1);
  });
});
