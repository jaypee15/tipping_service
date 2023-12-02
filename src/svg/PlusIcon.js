const PlusIcon = ({height, width, color, strokeWidth}) => {
  return (
    <div>
        <svg 
          width={width ? `${width}` : "13"}
          height={height ? `${height}` : "12"}
          viewBox="0 0 13 12" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M6.5 11V1M1.5 6H11.5"
            stroke={color ? `${color}` : "white"}
            stroke-width={strokeWidth ? `${strokeWidth}` : "1.875"}
            stroke-linecap="round"
          />
        </svg>
    </div>
  )
}
export default PlusIcon