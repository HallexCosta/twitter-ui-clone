import { Author } from "./author"

export interface Tweet {
  content: string
  author: Author
  amountComments: number
  amountRetweets: number
  amountLikes: number
}

export class TweetDomain {
  constructor(public readonly props: Tweet) {}
}
