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
const Button = ({text, earnPlanStyle, skip, regular, type, icon, onClick, className = null}) => {


  const btnDisplayStyle = skip ? skipButton ? regular : regularButton : '';

  const defaultStyle = {display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 'bold', color: '#fff', fontSize: '1em', cursor: 'pointer', borderRadius: '10px', padding: '10px', border: 'none', backgroundColor: 'rgb(25, 170, 227)'};
  
  return (
    <button 
    style={{...defaultStyle, ...btnDisplayStyle}}
      className={className}
      type={type ?? "submit"}
      onClick={onClick}
    >
      {icon} {text}
    </button>
  )
}

export default Button