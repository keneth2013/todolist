function FormAction({caption, onClick}){
    let myClasses = [

    ];
    return(
        <button onClick={onClick}  >{caption}</button>
    );
}

export default FormAction;