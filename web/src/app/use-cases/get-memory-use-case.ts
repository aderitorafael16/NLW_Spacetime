import Memory from '../entities/Memory'
import { MemoriesRepository } from '../repositories/memories-repository'
import { inject, injectable } from 'tsyringe'
import { AppError } from '@/errors/AppError'

type GetMemoryResponse = Promise<Memory>

@injectable()
export class GetMemoryUseCase {
  constructor(
    @inject('MemoriesRepository')
    private memoriesRepository: MemoriesRepository,
  ) {}

  async execute(id: string): GetMemoryResponse {
    const memory = await this.memoriesRepository.getById(id)
    console.log(memory)

    if (!memory) {
      throw new AppError('Memory already exists')
    }

    return memory
  }
}
