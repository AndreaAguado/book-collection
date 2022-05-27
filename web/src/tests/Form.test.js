import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../components/Form';
import { Route } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom'
import callToApi from '../services/callToApi.js';

test('When fields are empty wont submit update_book form', () => {
    let bookToRenderId = 1;
    // doc en https://testing-library.com/docs/dom-testing-library/api-events#using-jest-function-mocks
    const handleInputMock = jest.fn();
    const data = {};

    render(<Route path="/"><Form handleInput={handleInputMock} data={data} id="update_book" dataId={bookToRenderId}></Form></Route>, { wrapper: MemoryRouter });

    const submitButtonHTMLElement = screen.getByText('Submit');

    // doc en https://jestjs.io/docs/jest-object#jestspyonobject-methodname
    const updateBookSpy = jest.spyOn(callToApi, 'updateBook');

    // doc en https://testing-library.com/docs/dom-testing-library/api-events
    fireEvent.click(submitButtonHTMLElement);

    expect(updateBookSpy).not.toHaveBeenCalled();
    console.log("console log", updateBookSpy);
    // muy importante dejarlo como estaba!!
    updateBookSpy.mockRestore();
});

test('When fields are filled the update_book form is submitted', () => {
    let bookToRenderId = 1;
    // doc en https://testing-library.com/docs/dom-testing-library/api-events#using-jest-function-mocks
    const handleInput = jest.fn();
    const data = {
        name: 'not empty',
        first_name: 'not empty',
        last_name: 'not empty',
        isbn: 'not empty',
    };

    render(<Route path="/"><Form handleInput={handleInput} data={data} id="update_book" dataId={bookToRenderId} /></Route>, { wrapper: MemoryRouter });

    // doc en https://jestjs.io/docs/jest-object#jestspyonobject-methodname
    const updateBookSpy = jest.spyOn(callToApi, 'updateBook');

    const submitButtonHTMLElement = screen.getByText('Submit');

    // doc en https://testing-library.com/docs/dom-testing-library/api-events
    fireEvent.click(submitButtonHTMLElement);

    expect(updateBookSpy).toHaveBeenCalledTimes(1);

    // muy importante dejarlo como estaba!!
    updateBookSpy.mockRestore();
});
