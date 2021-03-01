function Form({children}) {
    return(
        <div className="box-content  h-full w-full p-4 border-8">
            <form className="flex items-center px-4 border">
                {children}
            </form>
        </div>
    );
}

export default Form;