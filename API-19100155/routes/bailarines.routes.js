import { Router } from "express";
import {
  getBailarines,
  createBailarines,
  updateBailarin,
  getBailarin,
  deleteBailarin,
} from "../controllers/bailarines.controllers.js";
import fileUpload from "express-fileupload";

/**
 * @openapi
 * components:
 *   schemas:
 *     Bailarin:
 *       type: object
 *       properties:
 *         id: 
 *           type: string
 *           example: 63786c5a52ae6ebee32fe1a4
 *         name: 
 *           type: string
 *           example: Ezequiel 
 *         dance:
 *           type: string
 *           example: Ballet
 *         Gender:
 *           type: string
 *           example: Male or Female
 *         Image:
 *           type: image
 *           example: Foto del bailarín
 */

const router = Router();

/** 
 * @swagger 
 * /bailarines: 
 *    get: 
 *     tags:
 *       - Bailarines
 *     description: Obtención de todos los bailarines en la base de datos, o bien, solo de aquel que se ingrese su ID.
 *     responses: 
 *       200: 
 *         description: Regresa una lista de todos los bailarines. 
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Bailarin"
 *       500:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */
router.get("/", getBailarines);

/** 
 * @swagger 
 * /bailarines/{ID}: 
 *    get: 
 *     tags:
 *       - Bailarines
 *     parameters:
 *       - in: path
 *         name: ID
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del bailarín a buscar
 *     description: Obtención de todos los bailarines en la base de datos, o bien, solo de aquel que se ingrese su ID.
 *     responses: 
 *       200: 
 *         description: Regresa una lista de todos los bailarines. 
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: "#/components/schemas/Bailarin"
 *       500:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */
router.get("/:id", getBailarin);

/** 
 * @swagger 
 * /bailarines: 
 *    post: 
 *     tags:
 *       - Bailarines
 *     description: Método capaz de agregar un nuevo bailarín.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name: 
 *                 type: string
 *               dance:
 *                 type: string
 *               gender:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *     responses: 
 *       200: 
 *         description: Permite agregar un nuevo bailarin. 
 */
router.post("/",fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
}), createBailarines);
/** 
 * @swagger 
 * /bailarines/{ID}: 
 *    put: 
 *     tags:
 *       - Bailarines
 *     parameters:
 *       - in: path
 *         name: ID
 *         schema:
 *           type: string
 *         required: true
 *     description: Método útil para actualizar un bailarín el cual necesita como parametro el ID y los datos a modificar.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name: 
 *                 type: string
 *               dance:
 *                 type: string
 *               gender:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *     responses: 
 *       200: 
 *         description: Permite modificar un nuevo bailarin por medio del id. 
 */
router.put("/:id", updateBailarin);

/** 
 * @swagger 
 * /bailarines/{ID}: 
 *    delete: 
 *     tags:
 *       - Bailarines
 *     parameters:
 *       - in: path
 *         name: ID
 *         schema:
 *           type: string
 *         required: true
 *     description: Elimina un bailarin por medio del ID
 *     responses: 
 *       200: 
 *         description: Permite eliminar un bailarin por medio del id. 
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: "#/components/schemas/Bailarin"
 *       500:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */
router.delete("/:id", deleteBailarin);

export default router;