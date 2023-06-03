import { Router } from 'express'

import { CreateMemoryController } from '../controllers/create-memory-controller'
import { DeleteMemoryController } from '../controllers/delete-memory-controller'
import { GetAllMemoriesController } from '../controllers/get-all-memories-controller'
import { GetMemoryController } from '../controllers/get-memory-controller'
import { SaveMemoryController } from '../controllers/save-memory-controller'

export const memoriesRoutes = Router()

const createMemoryController = new CreateMemoryController()
memoriesRoutes.post('/', createMemoryController.handle)

const getAllMemoriesController = new GetAllMemoriesController()
memoriesRoutes.get('/find/many', getAllMemoriesController.handle)

const getMemoryController = new GetMemoryController()
memoriesRoutes.get('/find/:id', getMemoryController.handle)

const saveMemoryController = new SaveMemoryController()
memoriesRoutes.put('/update/:id', saveMemoryController.handle)

const deleteMemoryController = new DeleteMemoryController()
memoriesRoutes.delete('/delete/:id', deleteMemoryController.handle)
