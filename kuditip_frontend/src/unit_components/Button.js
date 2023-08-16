const Button = ({signUpName, Login}) => {
  const Name = signUpName ?? Login;
    return (
      <button
        type="submit"
      >
        {Name}
      </button>

    )
}
 export default Button