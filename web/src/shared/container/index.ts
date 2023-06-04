import 'reflect-metadata'
import { container } from 'tsyringe'
import { MemoriesRepository } from '@/app/repositories/memories-repository'
import { PrismaMemoriesRepository } from '@/infra/database/prisma/repositories/prisma-memories-repository'
import { UsersRepository } from '@/app/repositories/users-repository'
import { PrismaUsersRepository } from '@/infra/database/prisma/repositories/prisma-users-repository'

container.registerSingleton<MemoriesRepository>(
  'MemoriesRepository',
  PrismaMemoriesRepository,
)

container.registerSingleton<UsersRepository>(
  'UsersRepository',
  PrismaUsersRepository,
)
