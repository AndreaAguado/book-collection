import '../styles/layout/Main.scss'
import Form from './Form';
import SectionWrapper from './SectionWrapper';
const Main = (props) => {
    return (
        <main className="main">
            <SectionWrapper classname="titles" section_name="Titles">
                <ul>
                    {props.renderBooksList()}
                </ul>
            </SectionWrapper>
            <SectionWrapper classname="add_book" section_name="Add new book">
                <Form handleInput={props.handleInput} data={props.data} id="add_book"></Form>
            </SectionWrapper>
        </main>
    )
}
export default Main;