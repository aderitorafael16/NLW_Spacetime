import { AppError } from '@/errors/AppError'
import { inject, injectable } from 'tsyringe'
import Memory from '../entities/Memory'
import { MemoriesRepository } from '../repositories/memories-repository'

interface ISaveMemoryRequest {
  isPublic: boolean
  coverUrl: string
  content: string
  ownerId: string
  id: string
}

type ISaveMemoryResponse = void

@injectable()
export class SaveMemoryUseCase {
  constructor(
    @inject('MemoriesRepository')
    private memoriesRepository: MemoriesRepository,
  ) {}

  async execute(request: ISaveMemoryRequest): Promise<ISaveMemoryResponse> {
    const { isPublic, content, coverUrl, ownerId, id } = request

    let memory = await this.memoriesRepository.getById(id)
    if (!memory) {
      throw new AppError('Memory already exists')
    }

    memory = new Memory({ isPublic, content, coverUrl, ownerId })
    await this.memoriesRepository.save(id, memory)
  }
}
