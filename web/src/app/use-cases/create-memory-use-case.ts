import { inject, injectable } from 'tsyringe'
import Memory from '../entities/Memory'
import { MemoriesRepository } from '../repositories/memories-repository'

interface ICreateMemoryRequest {
  ownerId: string
  isPublic: boolean
  coverUrl: string
  content: string
}

type ICreateMemoryResponse = Memory
@injectable()
export class CreateMemoryUseCase {
  constructor(
    @inject('MemoriesRepository')
    private memoriesRepository: MemoriesRepository,
  ) {}

  async execute(request: ICreateMemoryRequest): Promise<ICreateMemoryResponse> {
    const { isPublic, content, coverUrl, ownerId } = request
    const data = new Memory({ isPublic, content, coverUrl, ownerId })
    const memory = await this.memoriesRepository.create(data)

    return memory
  }
}
