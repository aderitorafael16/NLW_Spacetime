import Memory from '@/app/entities/Memory'

export class MemoryViewModel {
  static toHTTP(memory: Memory) {
    return {
      memory: {
        id: memory.id,
        content: memory.content,
        isPublic: memory.isPublic,
        coverUrl: memory.coverUrl,
        ownerId: memory.ownerId,
        createdAt: memory.createdAt,
      },
    }
  }
}
