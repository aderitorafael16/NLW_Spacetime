import { Request, Response } from 'express'
import { z } from 'zod'
import { GetMemoryUseCase } from '../../../app/use-cases/get-memory-use-case'
import { MemoryViewModel } from './view-models/memory-view-model'
import { container } from 'tsyringe'

export class GetMemoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getMemoryUseCase = container.resolve(GetMemoryUseCase)
    const getMemorySchema = z.object({
      id: z.string(),
    })
    const { id } = getMemorySchema.parse(request.params)
    const memory = await getMemoryUseCase.execute(id)
    return response.status(200).json(MemoryViewModel.toHTTP(memory))
  }
}
