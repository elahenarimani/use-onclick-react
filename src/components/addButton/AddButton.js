import './addButton.css'
function AddButton({onClickHandler}){
    return(
        <button onClick={onClickHandler}>+</button>
    )
}
export default AddButton