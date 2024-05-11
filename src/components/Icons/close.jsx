import * as React from "react"

export function SvgClose(props) {
  return (
    <button onClick={props.onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      fill="currentColor"
      className="bi bi-x-circle text-danger"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M8 15A7 7 0 118 1a7 7 0 010 14m0 1A8 8 0 108 0a8 8 0 000 16" />
      <path d="M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708" />
    </svg>
    </button>
  )
}
