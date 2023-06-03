import { Request, Response } from 'express'
import { z } from 'zod'
import { SaveMemoryUseCase } from '../../../app/use-cases/save-memory-use-case'
import { container } from 'tsyringe'

export class SaveMemoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const saveMemoryUseCase = container.resolve(SaveMemoryUseCase)
    const saveMemorySchema = z.object({
      isPublic: z.coerce.boolean(),
      content: z.string(),
      coverUrl: z.string().url(),
    })

    const paramsSchema = z.object({
      id: z.string(),
    })

    const { isPublic, content, coverUrl } = saveMemorySchema.parse(request.body)
    const { id } = paramsSchema.parse(request.params)
    const ownerId = 'cli8lb0430000jhqaouz3is9f'
    await saveMemoryUseCase.execute({
      isPublic,
      content,
      coverUrl,
      ownerId,
      id,
    })

    return response.status(200).send()
  }
}
