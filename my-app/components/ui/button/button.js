function Button( props ){

  const clickHandler = () =>{
    props.onClick()
  }

  return <button className={props.className}
                type={props.type}
                id={props.id}
                onClick={clickHandler}
                >{props.children}</button>
}

export default Button;