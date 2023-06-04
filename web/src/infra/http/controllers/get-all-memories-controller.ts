import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { GetAllMemoriesUseCase } from '../../../app/use-cases/get-all-memories-use-case'
import { MemoryViewModel } from './view-models/memory-view-model'

export class GetAllMemoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getAllMemoriesUseCase = container.resolve(GetAllMemoriesUseCase)
    const memories = await getAllMemoriesUseCase.execute()
    const data = memories.map((memory) => {
      return MemoryViewModel.toHTTP(memory)
    })

    return response.status(200).json(data)
  }
}
