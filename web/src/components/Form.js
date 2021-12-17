import '../styles/layout/Form.scss';

const Form = (props) => {
    const handleChange = (ev) => {
        props.handleInput(ev.currentTarget.value, ev.currentTarget.name);
    };
    return (
        <form className="form" method="POST" onSubmit={ev => ev.preventDefault()}>
            <label htmlFor="title">Title <span className="form_asterisk">*</span></label>
            <input onChange={handleChange} type="text" placeholder="Romeo and Juliet" name="title" id="title" required />
            <label htmlFor="first_name">First name <span className="form_asterisk">*</span></label>
            <input onChange={handleChange} type="text" placeholder="William" name="first_name" id="first_name" required />
            <label htmlFor="last_name">Last name <span className="form_asterisk"><span className="form_asterisk">*</span></span></label>
            <input onChange={handleChange} type="text" placeholder="Shakespeare" name="last_name" id="last_name" required />
            <label htmlFor="isbn">ISBN <span className="form_asterisk">*</span></label>
            <input onChange={handleChange} type="text" placeholder="978-1451552058" name="isbn" id="isbn" required />
            <input type="submit" />
        </form>
    )
}
export default Form;