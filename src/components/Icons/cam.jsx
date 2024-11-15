export function SvgCamera(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      fill="currentColor"
      className="bi bi-camera-reels"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M6 3a3 3 0 11-6 0 3 3 0 016 0M1 3a2 2 0 104 0 2 2 0 00-4 0" />
      <path d="M9 6h.5a2 2 0 011.983 1.738l3.11-1.382A1 1 0 0116 7.269v7.462a1 1 0 01-1.406.913l-3.111-1.382A2 2 0 019.5 16H2a2 2 0 01-2-2V8a2 2 0 012-2zm6 8.73V7.27l-3.5 1.555v4.35zM1 8v6a1 1 0 001 1h7.5a1 1 0 001-1V8a1 1 0 00-1-1H2a1 1 0 00-1 1" />
      <path d="M9 6a3 3 0 100-6 3 3 0 000 6M7 3a2 2 0 114 0 2 2 0 01-4 0" />
    </svg>
  )
}
