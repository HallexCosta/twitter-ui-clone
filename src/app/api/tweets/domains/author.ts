export interface Author {
  id: number
  photo: string
  name: string
  username: string
}

export class AuthorDomain {
  constructor(public readonly props: Author) {}
}
