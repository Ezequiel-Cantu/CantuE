import { Router } from "express";
import {
  getBailarines,
  createBailarines,
  updateBailarin,
  getBailarin,
  deleteBailarin,
} from "../controllers/bailarines.controllers.js";
import fileUpload from "express-fileupload";

const router = Router();

/** 
 * @swagger 
 * /bailarines: 
 *    get: 
 *     description: Welcome to swagger-jsdoc! 
 *     responses: 
 *       200: 
 *         description: Regresa una lista de todos los bailarines. 
 *       404:
 *       description: Error al obtener el bailarin debido a un ID erroneo o no existente.
 */
router.get("/", getBailarines);
/** 
 * @swagger 
 * /bailarines: 
 *    post: 
 *     description: Welcome to swagger-jsdoc! 
 *     responses: 
 *       200: 
 *         description: Permite agregar un nuevo bailarin. 
 *       404:
 *       description: Error al crear el bailarin debido a un que no hay conexion o los datos ingresados son incorrectos.
 */
router.post("/",fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
}), createBailarines);
/** 
 * @swagger 
 * /bailarines: 
 *    put: 
 *     description: Welcome to swagger-jsdoc! 
 *     responses: 
 *       200: 
 *         description: Permite modificar un nuevo bailarin por medio del id. 
 *       404:
 *       description: Error al actualizar el bailarin debido a un que el id ingresado es incorrecto o inexistente.
 */
router.put("/:id", updateBailarin);
/** 
 * @swagger 
 * /bailarines: 
 *    get: 
 *     description: Welcome to swagger-jsdoc! 
 *     responses: 
 *       200: 
 *         description: Permite obtener un bailarin por medio del id. 
 *       404:
 *       description: Error al obtener el bailarin debido a un que el id ingresado es incorrecto o inexistente.
 */
router.get("/:id", getBailarin);
/** 
 * @swagger 
 * /bailarines: 
 *    put: 
 *     description: Welcome to swagger-jsdoc! 
 *     responses: 
 *       200: 
 *         description: Permite eliminar un bailarin por medio del id. 
 *       404:
 *       description: Error al eliminar el bailarin debido a un que el id ingresado es incorrecto o inexistente.
 */
router.delete("/:id", deleteBailarin);

export default router;