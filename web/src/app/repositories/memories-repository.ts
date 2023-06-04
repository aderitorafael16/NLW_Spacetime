import Memory from '../entities/Memory'

export interface MemoriesRepository {
  getAll(): Promise<Memory[]>
  getById(id: string): Promise<Memory>
  save(id: string, memory: Memory): Promise<void>
  delete(id: string): Promise<void>
  create(memory: Memory): Promise<Memory>
}
