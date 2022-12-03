import Bailarin from "../models/bailarin.model.js";
import {uploadImage, deleteImage} from '../utils/cloudinary.js'
import fs from 'fs-extra'

/** 
 * @swagger 
 * getBailarines: 
 *    get: 
 *     description: Obtención de todos los registros en la base de datos.
 *     responses: 
 *       200: 
 *         description: Regresa una lista de todos los bailarines mediante un json. 
 *       404:
 *       description: Error al obtener el bailarin debido a un ID erroneo o no existente.
 */
export const getBailarines = async (req, res) => {
  try {
    const bailarines = await Bailarin.find();
    return res.json(bailarines);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/** 
 * @swagger 
 * createBailarines: 
 *    post: 
 *     description: Método capaz de agregar un nuevo bailarín.
 *     responses: 
 *       200: 
 *         description: Permite agregar nuevos bailarines y en caso de no tener el campo nombre con un dato, responde como un error. 
 *       404:
 *       description: Error al crear el bailarin debido a un que no hay conexion o los datos ingresados son incorrectos.
 */
export const createBailarines = async (req, res) => {
  const { name, dance, gender } = req.body;

  if (!name) return res.status(404).json({message: 'name is required'})
  
  try {
    const newBailarin = new Bailarin({
      name,
      dance,
      gender,
    });

    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath)
      newBailarin.image = {
        public_id: result.public_id,
        secure_url: result.secure_url
      }
      await fs.unlink(req.files.image.tempFilePath)
    }
    
    const savedBailarin = await newBailarin.save();
    return res.json(savedBailarin);
  } catch (error) {
    if (req.files?.image) {
      await fs.unlink(req.files.image.tempFilePath)
    }
    return res.status(500).json({ message: error.message });
  }
};

/** 
 * @swagger 
 * updateBailarin: 
 *    put: 
 *     description: Método útil para actualizar un bailarín el cual necesita como parametro el ID y los datos a modificar.
 *     responses: 
 *       200: 
 *         description: Modificacion de bailarines obteniendo los datos por el id y solo necesita recibir el/los dato(s) a modificar. 
 *       404:
 *       description: Error al actualizar el bailarin debido a un ID erroneo o no existente.
 */
export const updateBailarin = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBailarin = await Bailarin.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log(req.body)
    if (!updatedBailarin)
      return res.status(404).json({ message: "Bailarin Not Found" });
    return res.json(updatedBailarin);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/** 
 * @swagger 
 * deleteBailarin: 
 *    delete: 
 *     description: Método para eliminar un bailarín por medio del ID 
 *     responses: 
 *       200: 
 *         description: Elimina un bailarin a traves del id (todos los datos alamacenados del mismo). 
 *       404:
 *       description: Error al eliminar el bailarin debido a un ID erroneo o no existente.
 */
export const deleteBailarin = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBailarin = await Bailarin.findByIdAndDelete(id);

    if (!deletedBailarin) return res.status(404).json({message: 'Bailarin does not exists'})

    await deleteImage(deletedBailarin.image.public_id)
    
    return res.json(deletedBailarin);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/** 
 * @swagger 
 * getBailarin: 
 *    get: 
 *     description: Método para obtener un bailarín por medio del ID  
 *     responses: 
 *       200: 
 *         description: Obtiene un bailarin por medio de su ID, regresando un json con todos los datos del mismo. 
 *       404:
 *       description: Error al obtener el bailarin debido a un ID erroneo o no existente.
 */
export const getBailarin = async (req, res) => {
  const { id } = req.params;
  try {
    const bailarinFound = await Bailarin.findById(id);
    if (!bailarinFound)
      return res.status(404).json({ message: "Bailarin not found" });
    return res.json(bailarinFound);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
