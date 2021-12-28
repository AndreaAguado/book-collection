import { render, screen } from '@testing-library/react';
import BookDetail from '../components/BookDetail';
import { Route } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom'

test('ISBN is `not available` when falsy', () => {
    let bookToRender = {
        title: 'Alice in wonderland',
        first_name: 'Lewis',
        last_name: 'Carroll',
        isbn: '',
    }

    render(<Route path="/"><BookDetail bookToRender={bookToRender}></BookDetail></Route>, { wrapper: MemoryRouter });


    const isbnHTMLElement = screen.getByText(/ISBN:/);
    const isbn = isbnHTMLElement.innerHTML;
    expect(isbn).toContain('Not available');



})
