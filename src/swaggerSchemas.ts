/**
 * @swagger
 * components:
 *   schemas:
 *     Fact:
 *       type: object
 *       required:
 *         - text
 *         - source
 *         - category
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the fact
 *         text:
 *           type: string
 *           description: The fact text
 *         source:
 *           type: string
 *           description: The source of the fact
 *         category:
 *           type: string
 *           description: The category of the fact
 *         votes_interesting:
 *           type: integer
 *           description: Number of interesting votes
 *         votes_mind_blowing:
 *           type: integer
 *           description: Number of mind-blowing votes
 *         votes_false:
 *           type: integer
 *           description: Number of false votes
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: The date and time the fact was created
 *         updated_at:
 *           type: string
 *           format: date-time
 *           description: The date and time the fact was updated
 *       example:
 *         id: 1
 *         text: 'The quick brown fox jumps over the lazy dog.'
 *         source: 'Some Source'
 *         category: 'Example Category'
 *         votes_interesting: 10
 *         votes_mind_blowing: 5
 *         votes_false: 1
 *         created_at: '2021-05-06T20:00:00.000Z'
 *         updated_at: '2021-05-06T20:00:00.000Z'
 */
