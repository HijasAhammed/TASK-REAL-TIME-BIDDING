const express=require("express")
const itemController=require("../Controllers/itemController");
const authMiddleware=require("../Middileware/authMiddleware");
const roleMidddleware=require("../Middileware/roleMiddleware");
const router=express.Router();
router.get('/', itemController.getAllItems);
router.get('/:id', itemController.getItemById);
router.post('/',  itemController.createItem);
router.put('/:id',  itemController.updateItem);
router.delete('/:id',  itemController.deleteItem);
module.exports= router;
