import { AppError } from '@/errors/AppError'
import { inject, injectable } from 'tsyringe'
import { MemoriesRepository } from '../repositories/memories-repository'

type DeleteMemoryResponse = Promise<void>

@injectable()
export class DeleteMemoryUseCase {
  constructor(
    @inject('MemoriesRepository')
    private memoriesRepository: MemoriesRepository,
  ) {}

  async execute(id: string): DeleteMemoryResponse {
    const memory = await this.memoriesRepository.getById(id)
    if (!memory) {
      throw new AppError('Memory already exists')
    }
    await this.memoriesRepository.delete(id)
  }
}
