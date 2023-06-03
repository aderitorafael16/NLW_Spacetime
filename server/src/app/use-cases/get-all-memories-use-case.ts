import { inject, injectable } from 'tsyringe'
import Memory from '../entities/Memory'
import { MemoriesRepository } from '../repositories/memories-repository'

type GetAllMemoryResponse = Promise<Memory[]>

@injectable()
export class GetAllMemoriesUseCase {
  constructor(
    @inject('MemoriesRepository')
    private memoriesRepository: MemoriesRepository,
  ) {}

  async execute(): GetAllMemoryResponse {
    const memory = await this.memoriesRepository.getAll()

    return memory
  }
}
