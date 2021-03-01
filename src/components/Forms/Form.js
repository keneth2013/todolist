function Form({children}) {
    return(
        <div className="box-content  h-full w-full p-4 border-bg ">
            <form className="items-center px-4 border p-8">
                {children}
            </form>
        </div>
    );
}

export default Form;