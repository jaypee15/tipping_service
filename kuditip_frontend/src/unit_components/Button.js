const skipButton = {
  borderColor: '#fff',
  color: 'rgb(25, 170, 227)',
  backgroundColor: '#fff',
  width: '100%',
}

const regularButton = {
  borderColor: 'rgb(25, 170, 227)',
  color: '#fff',
  backgroundColor: 'rgb(25, 170, 227)',
  width: '100%',
}
const Button = ({text, earnPlanStyle, skip, regular, type, onClick, className = null}) => {


  const btnDisplayStyle = skip ? skipButton ? regular : regularButton : '';

  const defaultStyle = {fontWeight: 'bold', color: '#fff', fontSize: '1em', cursor: 'pointer', borderRadius: '10px', padding: '10px', border: 'none', backgroundColor: 'rgb(25, 170, 227)'};
  
  return (
    <button 
    style={{...defaultStyle, ...btnDisplayStyle}}
      className={className}
      type={type ?? "submit"}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button