import Memory from '@/app/entities/Memory'
import { Memory as rawMemory } from '@prisma/client'

export class MemoriesMapper {
  static toPrisma(memory: Memory) {
    return {
      id: memory.id,
      content: memory.content,
      isPublic: memory.isPublic,
      coverUrl: memory.coverUrl,
      ownerId: memory.ownerId,
      createdAt: memory.createdAt,
    }
  }

  static toDomain(raw: rawMemory) {
    return new Memory({
      id: raw.id,
      content: raw.content,
      isPublic: raw.isPublic,
      coverUrl: raw.coverUrl,
      ownerId: raw.ownerId,
      createdAt: raw.createdAt,
    })
  }
}
