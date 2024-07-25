import express from "express";
import {
  getAllFacts,
  getFactById,
  createFact,
  updateFact,
  deleteFact,
  voteInteresting,
  voteMindBlowing,
  voteFalse,
} from "../controllers/factController";

const router = express.Router();

/**
 * @swagger
 * /api/facts:
 *   get:
 *     summary: Retrieve a list of facts
 *     responses:
 *       200:
 *         description: A list of facts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Fact'
 */
router.get("/", getAllFacts);

/**
 * @swagger
 * /api/facts/{id}:
 *   get:
 *     summary: Retrieve a single fact by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the fact to retrieve
 *     responses:
 *       200:
 *         description: A single fact
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Fact'
 *       404:
 *         description: Fact not found
 */
router.get("/:id", getFactById);

/**
 * @swagger
 * /api/facts:
 *   post:
 *     summary: Create a new fact
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Fact'
 *     responses:
 *       201:
 *         description: The created fact
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Fact'
 */
router.post("/", createFact);

/**
 * @swagger
 * /api/facts/{id}:
 *   put:
 *     summary: Update a fact by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the fact to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Fact'
 *     responses:
 *       200:
 *         description: The updated fact
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Fact'
 *       404:
 *         description: Fact not found
 */
router.put("/update/:id", updateFact);

/**
 * @swagger
 * /api/facts/{id}:
 *   delete:
 *     summary: Delete a fact by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the fact to delete
 *     responses:
 *       204:
 *         description: Fact deleted
 *       404:
 *         description: Fact not found
 */
router.delete("/:id", deleteFact);

/**
 * @swagger
 * /api/facts/{id}/vote/interesting:
 *   post:
 *     summary: Vote for interesting
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the fact to vote
 *       - in: query
 *         name: action
 *         required: true
 *         schema:
 *           type: string
 *           enum: [increment, decrement]
 *         description: The action to perform (increment or decrement)
 *     responses:
 *       200:
 *         description: The updated fact with the new vote count
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Fact'
 */
router.post('/:id/vote/interesting', voteInteresting);

/**
 * @swagger
 * /api/facts/{id}/vote/mindblowing:
 *   post:
 *     summary: Vote for mind-blowing
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the fact to vote
 *       - in: query
 *         name: action
 *         required: true
 *         schema:
 *           type: string
 *           enum: [increment, decrement]
 *         description: The action to perform (increment or decrement)
 *     responses:
 *       200:
 *         description: The updated fact with the new vote count
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Fact'
 */
router.post('/:id/vote/mindblowing', voteMindBlowing);

/**
 * @swagger
 * /api/facts/{id}/vote/false:
 *   post:
 *     summary: Vote for false
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the fact to vote
 *       - in: query
 *         name: action
 *         required: true
 *         schema:
 *           type: string
 *           enum: [increment, decrement]
 *         description: The action to perform (increment or decrement)
 *     responses:
 *       200:
 *         description: The updated fact with the new vote count
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Fact'
 */
router.post('/:id/vote/false', voteFalse);

export default router;
