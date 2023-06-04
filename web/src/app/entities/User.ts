interface UserProps {
  id?: string
  name: string
  githubId: number
  login: string
  avatarUrl: string
}

export default class User {
  private props: UserProps

  constructor(props: UserProps) {
    this.props = {
      ...props,
    }
  }

  public get id(): string | undefined {
    return this.props.id
  }

  public set name(name: string) {
    this.props.name = name
  }

  public get name(): string {
    return this.props.name
  }

  public set login(login: string) {
    this.props.login = login
  }

  public get login(): string {
    return this.props.login
  }

  public set githubId(githubId: number) {
    this.props.githubId = githubId
  }

  public get githubId(): number {
    return this.props.githubId
  }

  public set avatarUrl(avatarUrl: string) {
    this.props.avatarUrl = avatarUrl
  }

  public get avatarUrl(): string {
    return this.props.avatarUrl
  }
}
