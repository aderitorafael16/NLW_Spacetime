import { Replace } from '@/helpers/Repalce'

interface MemoryProps {
  id?: string
  ownerId: string
  isPublic: boolean
  coverUrl: string
  content: string
  createdAt: Date
}

export default class Memory {
  private props: MemoryProps

  constructor(props: Replace<MemoryProps, { createdAt?: Date }>) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    }
  }

  public get id(): string | undefined {
    return this.props.id
  }

  public set ownerId(ownerId: string) {
    this.props.ownerId = ownerId
  }

  public get ownerId(): string {
    return this.props.ownerId
  }

  public set isPublic(isPublic: boolean) {
    this.props.isPublic = isPublic
  }

  public get isPublic(): boolean {
    return this.props.isPublic
  }

  public set coverUrl(coverUrl: string) {
    this.props.coverUrl = coverUrl
  }

  public get coverUrl(): string {
    return this.props.coverUrl
  }

  public set content(content: string) {
    this.props.content = content
  }

  public get content(): string {
    return this.props.content
  }

  public get createdAt(): Date {
    return this.props.createdAt
  }
}
