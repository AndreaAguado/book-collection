import '../styles/layout/Form.scss';
import callToApi from '../services/callToApi.js';
import { useState } from 'react';

const Form = (props) => {
    const handleChange = (ev) => {
        props.handleInput(ev.currentTarget.value, ev.currentTarget.name);
    };

    const [success, setSuccess] = useState(false);

    const handleCreate = (ev) => {
        if (ev.currentTarget.id === "add_book") {
            console.log(props.data);
            //when data fields are not empty a new book can be created
            callToApi.addNewBook(props.data).then(response => {
                setSuccess(response.success);
                console.log(success);
            })
        }
        else if (ev.currentTarget.id === "update_book") {
            console.log(props.dataId);
            console.log(props.data);
            let objectForBody = props.data;
            objectForBody.id = props.dataId;
            console.log(objectForBody);
            callToApi.updateBook(parseInt(props.dataId), objectForBody).then(response => {
                console.log(response);
            })
        }

    }

    return (
        <form className="form" method="POST" onSubmit={ev => ev.preventDefault()}>
            <label htmlFor="name">Title <span className="form_asterisk">*</span></label>
            <input onChange={handleChange} type="text" placeholder="Romeo and Juliet" name="name" id="name" required />
            <label htmlFor="first_name">Author's first name <span className="form_asterisk">*</span></label>
            <input onChange={handleChange} type="text" placeholder="William" name="first_name" id="first_name" required />
            <label htmlFor="last_name">Author's last name <span className="form_asterisk"><span className="form_asterisk">*</span></span></label>
            <input onChange={handleChange} type="text" placeholder="Shakespeare" name="last_name" id="last_name" required />
            <label htmlFor="isbn">ISBN <span className="form_asterisk">*</span></label>
            <input onChange={handleChange} type="text" placeholder="978-1451552058" name="isbn" id="isbn" required />
            <input className="submit" onClick={handleCreate} type="submit" value="Submit" id={props.id} />
        </form>
    )
}
export default Form;