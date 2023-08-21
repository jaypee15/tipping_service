const Button = ({signUpName, Login, Next}) => {
  const Name = signUpName ?? Login ?? Next;
    return (
      <button
        type="submit"
      >
        {Name}
      </button>

    )
}
 export default Button