import { NextResponse } from "next/server"
import { Tweet } from "./domains/tweet"

const tweets: Tweet[] = [
  {
    content: String.raw`
    Acabei de migrar um projeto React GIGANTE de create-react-app para
    Vite e os resultados foram: 
    ✅ npm start: De 32s para 400ms (sim, demorava 30s) 
    ✅ npm build: De 120s para 22s 
            
    Além disso, troquei do Yarn para o PNPM e o install das deps mudou
    de 24s para 8s 🔥
    `,
    author: {
      id: 1,
      name: "Hallex Costa",
      username: "hallexcosta",
      photo: "https://github.com/hallexcosta.png"
    },
    amountComments: 30,
    amountLikes: 100,
    amountRetweets: 32
  }
]
const db = new Map()
db.set('tweets', tweets)

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")

  return NextResponse.json({
    name: "hallexcosta"
  })
}
