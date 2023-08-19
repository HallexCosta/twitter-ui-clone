"use client"
import { ArrowsClockwise, ChatCircle, Heart, TwitterLogo } from "phosphor-react"
import { NavBar } from "./components/NavBar"
import { TweetButton } from "./components/TweetButton"
import { Tweet } from "./api/tweets/domains/tweet"
import { useRef, useState } from "react"

interface TweetProps {
  tweet: Tweet
}

export default function Home() {
  const Tweet = () => {
    return (
      <div className="flex flex-row gap-3 mt-6 px-5 py-6">
        <img
          src="https://github.com/hallexcosta.png"
          alt="HallexCosta"
          className="rounded-full w-14 h-14"
        />

        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-row items-center gap-1">
            <strong className="text-base">Hallex Costa</strong>
            <span className="text-zinc-400/100 font-medium text-sm">
              @hallexcosta
            </span>
          </div>
          <span className="text-base">
            Acabei de migrar um projeto React GIGANTE de create-react-app para
            Vite e os resultados foram: <br />
            <br />✅ npm start: De 32s para 400ms (sim, demorava 30s) <br />
            ✅ npm build: De 120s para 22s <br />
            <br />
            Além disso, troquei do Yarn para o PNPM e o install das deps mudou
            de 24s para 8s 🔥
          </span>

          <div className="flex flex-row w-full gap-12 text-base text-neutral-500">
            <div className="flex flex-row gap-2 cursor-pointer">
              <ChatCircle color="#89A2B8" width="24" height="24" />
              <span>32</span>
            </div>
            <div className="flex flex-row gap-2 cursor-pointer">
              <ArrowsClockwise color="#89A2B8" width="24" height="24" />
              <span>32</span>
            </div>
            <div className="flex flex-row gap-2 cursor-pointer">
              <Heart color="#89A2B8" width="24" height="24" />
              <span>32</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SeparatorMedium = () => {
    return <div className={`bg-gray-100 h-3`}></div>
  }
  const SeparatorExtraSmall = () => {
    return <div className={`bg-gray-100 h-[1px]`}></div>
  }

  const TweetAnswer = () => {
    const textareaRef = useRef(null)
    const [focused, setFocused] = useState(false)
    const [content, setContent] = useState("Tweet your answer")

    function onHandleInput() {
      console.log("testtng")
      const textarea = textareaRef.current
      console.log(textarea.scrollHeight + "px")
      textarea.style.height = textarea.scrollHeight + "px"

      // if (textarea.innerText === "") {
      //   textarea.style.height = "4rem"
      // }
    }

    function handleFocusTweetAnswer(focused: boolean) {
      if (!focused && content.length == 0) {
        setContent("Tweet your answer")
      }

      if (focused && content.length == 0) {
        setContent("Tweet your answer")
      }
      setFocused(!focused)
    }

    function handleEnterAnswer(e) {
      console.log(e.target.innerText)
    }

    return (
      <div className="flex flex-row gap-4 w-full px-5 py-6">
        <div className="flex flex-row items-start gap-4 w-full h-auto">
          <img
            className="rounded-full w-14 h-14"
            src="https://github.com/hallexcosta.png"
            alt="HallexCosta"
          />
          <textarea
            ref={textareaRef}
            className={`border-box text-base font-semi-bold p-4 outline-none w-[60%] h-16 resize-none placeholder-zinc-600 placeholder:text-xl placeholder:font-bold`}
            placeholder="Tweet your answer"
            onInput={onHandleInput}
          ></textarea>
        </div>

        <button className="rounded-full h-fit bg-twitter-blue text-white text-lg font-semi-bold px-6 py-4">
          Answer
        </button>
      </div>
    )
  }

  return (
    <main className="w-full h-screen flex flex-row">
      <aside className="w-80 h-full flex flex-col gap-8 p-5">
        <TwitterLogo width={32} height={32} weight="fill" color="#1da1f2" />
        <NavBar />
        <TweetButton />
      </aside>
      <section className="border border-l-zinc-300 w-full">
        <h3 className="font-black text-2xl px-3 py-4">Tweet</h3>
        <SeparatorExtraSmall />

        <Tweet />
        <SeparatorMedium />

        <TweetAnswer />
        <SeparatorExtraSmall />

        <Tweet />
        <SeparatorExtraSmall />
      </section>
    </main>
  )
}
