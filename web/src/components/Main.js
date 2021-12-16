import '../styles/layout/Main.scss'
import Form from './Form';
import SectionWrapper from './SectionWrapper';
const Main = () => {
    return (
        <main className="main">
            <SectionWrapper classname="titles" section_name="Titles"></SectionWrapper>
            <SectionWrapper classname="add_book" section_name="Add new book">
                <Form></Form>
            </SectionWrapper>
            <SectionWrapper classname="update_book" section_name="Update book info">
                <Form></Form>
            </SectionWrapper>
        </main>
    )
}
export default Main;