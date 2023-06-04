import { Router } from 'express'
import { memoriesRoutes } from './memories.routes'
export const routes = Router()

routes.use('/memories', memoriesRoutes)
