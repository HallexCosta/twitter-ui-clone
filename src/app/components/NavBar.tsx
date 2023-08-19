"use client"

import {
  House,
  Hash,
  Bell,
  BookmarkSimple,
  FileText,
  User,
  DotsThreeCircle,
  EnvelopeSimple
} from "phosphor-react"

import React, { useState } from "react"
import { NavButton } from "./NavButton"

type Icon = {
  selected: boolean
  icon: React.FC<{ mustFill: boolean }>
}

type NavIcons = {
  [key: string]: Icon
}

export function NavBar() {
  const [navButtonStates, setNavButtonStates] = useState<NavIcons>({
    home: {
      selected: true,
      icon: ({ mustFill }) => (
        <House
          weight={mustFill ? "fill" : "regular"}
          color={mustFill ? "#1da1f2" : "#000"}
          width="32"
          height="32"
        />
      )
    },
    explore: {
      selected: false,
      icon: ({ mustFill }) => (
        <Hash
          weight={mustFill ? "fill" : "regular"}
          color={mustFill ? "#1da1f2" : "#000"}
          width="32"
          height="32"
        />
      )
    },
    notifications: {
      selected: false,
      icon: ({ mustFill }) => (
        <Bell
          weight={mustFill ? "fill" : "regular"}
          color={mustFill ? "#1da1f2" : "#000"}
          width="32"
          height="32"
        />
      )
    },
    messages: {
      selected: false,
      icon: ({ mustFill }) => (
        <EnvelopeSimple
          weight={mustFill ? "fill" : "regular"}
          color={mustFill ? "#1da1f2" : "#000"}
          width="32"
          height="32"
        />
      )
    },
    bookmarks: {
      selected: false,
      icon: ({ mustFill }) => (
        <BookmarkSimple
          weight={mustFill ? "fill" : "regular"}
          color={mustFill ? "#1da1f2" : "#000"}
          width="32"
          height="32"
        />
      )
    },
    lists: {
      selected: false,
      icon: ({ mustFill }) => (
        <FileText
          weight={mustFill ? "fill" : "regular"}
          color={mustFill ? "#1da1f2" : "#000"}
          width="32"
          height="32"
        />
      )
    },
    user: {
      selected: false,
      icon: ({ mustFill }) => (
        <User
          weight={mustFill ? "fill" : "regular"}
          color={mustFill ? "#1da1f2" : "#000"}
          width="32"
          height="32"
        />
      )
    },
    more: {
      selected: false,
      icon: ({ mustFill }) => (
        <DotsThreeCircle
          weight={mustFill ? "fill" : "regular"}
          color={mustFill ? "#1da1f2" : "#000"}
          width="32"
          height="32"
        />
      )
    }
  })

  function onSelectNavButton(selectedButtonName: string) {
    console.log(selectedButtonName)
    const newNavButtonStates: NavIcons = {}

    for (const buttonName of Object.keys(navButtonStates)) {
      newNavButtonStates[buttonName] = {
        ...navButtonStates[buttonName],
        selected: buttonName === selectedButtonName ? true : false
      }
    }

    console.log(newNavButtonStates)
    setNavButtonStates(() => newNavButtonStates)
  }

  function toUpperCaseFirstLetter(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  return (
    <div className="flex flex-col items-center justify-center gap-y-8">
      {Object.keys(navButtonStates).map((buttonName) => (
        <NavButton
          key={buttonName}
          onClick={() => onSelectNavButton(buttonName)}
        >
          {navButtonStates[buttonName.toString()].icon({
            mustFill: navButtonStates[buttonName].selected ? true : false
          })}
          <strong
            className={`leading-8 font-extrabold text-1xl ${
              navButtonStates[buttonName].selected ? "text-twitter-blue" : ""
            }`}
          >{`${toUpperCaseFirstLetter(buttonName)}`}</strong>
        </NavButton>
      ))}
    </div>
  )
}
