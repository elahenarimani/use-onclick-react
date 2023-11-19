import './reduceButton.css'
function ReduceButton({onClickHandler, children }){
    return(
        <button onClick={onClickHandler}>{children}</button>
        
    )
}
export default ReduceButton