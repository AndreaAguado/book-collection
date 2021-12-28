import { render, screen } from '@testing-library/react';
import Form from '../components/Form';
import { Route } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom'

test('When fields are empty wont submit form', () => {
    let bookToRender = {
        title: 'Alice in wonderland',
        first_name: 'Lewis',
        last_name: 'Carroll',
        isbn: '',
    }
    let bookToRenderId = 1;
    const handleInput = () => {

    }

    render(<Route path="/"><Form handleInput={handleInput} data={{}} id="update_book" dataId={bookToRenderId}></Form></Route>, { wrapper: MemoryRouter });


    const isbnHTMLElement = screen.getByText(/ISBN:/);
    const isbn = isbnHTMLElement.innerHTML;
    expect(isbn).toContain('Not available');



})
