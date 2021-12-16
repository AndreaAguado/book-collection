const Form = () => {
    return (
        <form action="POST">
            <label htmlFor="title">Title *</label>
            <input type="text" placeholder="Romeo and Juliet" name="title" id="title" required />
            <label htmlFor="first_name">First name *</label>
            <input type="text" placeholder="William" name="first_name" id="first_name" required />
            <label htmlFor="last_name">Last name *</label>
            <input type="text" placeholder="Shakespeare" name="last_name" id="last_name" required />
            <label htmlFor="isbn">ISBN *</label>
            <input type="text" placeholder="978-1451552058" name="isbn" id="isbn" required />
            <input type="submit" />
        </form>
    )
}
export default Form;