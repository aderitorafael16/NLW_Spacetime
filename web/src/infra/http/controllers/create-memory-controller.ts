import { Request, Response } from 'express'
import { z } from 'zod'
import { CreateMemoryUseCase } from '../../../app/use-cases/create-memory-use-case'
import { MemoryViewModel } from './view-models/memory-view-model'
import { container } from 'tsyringe'

export class CreateMemoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createMemoryUseCase = container.resolve(CreateMemoryUseCase)
    const createMemorySchema = z.object({
      isPublic: z.coerce.boolean(),
      content: z.string(),
      coverUrl: z.string().url(),
    })

    const { isPublic, content, coverUrl } = createMemorySchema.parse(
      request.body,
    )
    const ownerId = 'cli8lb0430000jhqaouz3is9f'
    const memory = await createMemoryUseCase.execute({
      isPublic,
      content,
      coverUrl,
      ownerId,
    })

    return response.status(201).json(MemoryViewModel.toHTTP(memory))
  }
}
