import * as React from "react"

export function SvgStudent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={35}
      height={35}
      fill="currentColor"
      className="bi bi-person"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M8 8a3 3 0 100-6 3 3 0 000 6m2-3a2 2 0 11-4 0 2 2 0 014 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
    </svg>
  )
}

