import { Children } from 'react'
import './Button.css'
function Button({onClickHandler,children}){
    return(
        <button onClick={onClickHandler}>{children}</button>
    )
}
export default Button