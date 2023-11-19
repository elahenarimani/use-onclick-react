import './Button.css'
function Button({onClickHandler}){
    return(
        <button onClick={onClickHandler}>+</button>
    )
}
export default Button