"use client"
import React, { ButtonHTMLAttributes } from "react"

interface NavButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  selected?: boolean
}

export function NavButton({ children, ...rest }: NavButtonProps) {
  return (
    <button
      className="flex gap-5 font-bold w-full d-flex items-center h-fit"
      {...rest}
    >
      {children}
    </button>
  )
}
