import * as React from "react"

export function SvgExclamation(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      fill="currentColor"
      className="bi bi-exclamation-circle"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M8 15A7 7 0 118 1a7 7 0 010 14m0 1A8 8 0 108 0a8 8 0 000 16" />
      <path d="M7.002 11a1 1 0 112 0 1 1 0 01-2 0M7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0z" />
    </svg>
  )
}