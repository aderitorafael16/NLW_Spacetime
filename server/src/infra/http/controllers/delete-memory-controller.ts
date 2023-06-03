import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'
import { DeleteMemoryUseCase } from '../../../app/use-cases/delete-memory-use-case'

export class DeleteMemoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const deleteMemoryUseCase = container.resolve(DeleteMemoryUseCase)
    const deleteMemorySchema = z.object({
      id: z.string(),
    })
    const { id } = deleteMemorySchema.parse(request.params)
    await deleteMemoryUseCase.execute(id)
    return response.status(200).send()
  }
}
