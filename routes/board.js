var express = require('express');
var router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     BoardItem:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *       example:
 *         id: 1
 *         name: "게시글1"
 *     BoardResponse:
 *       type: object
 *       properties:
 *         boards:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/BoardItem'
 *       example:
 *         boards:
 *           - id: 1
 *             name: "게시글1"
 *           - id: 2
 *             name: "게시글2"
 *           - id: 3
 *             name: "게시글3"
 */

/**
 * @swagger
 * /board:
 *   get:
 *     summary: "특정 기간 게시물 조회"
 *     operationId: "getBoard"
 *     description: "특정 기간 게시물 조회"
 *     tags: [Board]
 *     parameters:
 *       - in: query
 *         name: start_date
 *         required: false
 *         description: 조회 시작일
 *         schema:
 *           type: string
 *       - in: query
 *         name: end_date
 *         required: false
 *         description: 조회 종료일
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: "특정 기간 게시글 조회 결과"
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BoardResponse'
 */
router.get('/', function(req, res, next) {
  res.status(200).json({
    boards: [
      { "id": 1, "name": "게시글1" },
      { "id": 2, "name": "게시글2" },
      { "id": 3, "name": "게시글3" }
    ]
  });
});

module.exports = router;
