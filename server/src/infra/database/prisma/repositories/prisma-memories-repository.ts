import Memory from '@/app/entities/Memory'
import { MemoriesRepository } from '@/app/repositories/memories-repository'
import { prisma } from '@/lib/prisma'
import { MemoriesMapper } from '../mappers/memories-mapper'

export class PrismaMemoriesRepository implements MemoriesRepository {
  async getAll(): Promise<Memory[]> {
    const memories = await prisma.memory.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    })

    return memories.map((memory) => {
      return MemoriesMapper.toDomain(memory)
    })
  }

  async getById(id: string) {
    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    })

    return MemoriesMapper.toDomain(memory)
  }

  async delete(id: string): Promise<void> {
    await prisma.memory.delete({
      where: {
        id,
      },
    })
  }

  async save(id: string, memory: Memory): Promise<void> {
    const raw = MemoriesMapper.toPrisma(memory)
    await prisma.memory.update({
      where: {
        id,
      },
      data: raw,
    })
  }

  async create(data: Memory): Promise<Memory> {
    const raw = MemoriesMapper.toPrisma(data)

    const memory = await prisma.memory.create({
      data: raw,
    })

    return MemoriesMapper.toDomain(memory)
  }
}
