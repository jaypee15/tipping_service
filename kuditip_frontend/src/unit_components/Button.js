const Button = ({text, earnPlanStyle, skip, type, onClick, className}) => {
  const skipButton = {
    borderColor: '#fff',
    color: '#1BAEDF',
    backgroundColor: '#fff'
  }

  return (
    <button 
    // style={skip ? skipButton : earnPlanStyle}
    className={className}
      type={type ?? "submit"}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
 export default Button


