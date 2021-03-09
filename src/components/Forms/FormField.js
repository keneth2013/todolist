function FormField({type, id, fname, onChange, caption, value, error, ...attr}){
    return(
        <section>
            <label className ="m-3">{caption}</label>
            <input className ="m-3" type={type} id={id} name={fname} onChange={onChange} value={value} {...attr}/>
            {(error && true) ? (<section>{error}</section>):null}
        </section>

    );
}

export default FormField;