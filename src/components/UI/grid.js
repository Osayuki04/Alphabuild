export default function GridPattern(props) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path
            d="M30 0 L0 0 0 30"
            fill="#ffff"
            stroke="#dddd"
            strokeWidth="1"
            opacity="0.2"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}
