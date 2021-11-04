import { render, fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar'


    test("Show input", () => {
        const inputSearch = jest.fn()
        render( <SearchBar value="" onChange={inputSearch} /> )

        const search = screen.getByPlaceholderText(/Search.../i)

        expect(search).toBeInTheDocument()
    })

    test("Pass the search term in the input field", () => {
        const inputSearch = jest.fn()
        render( <SearchBar value="" onChange={inputSearch} /> )
        const search = screen.getByTestId("seach-input")
        userEvent.type(search, "test")
        
        expect(screen.getByTestId("seach-input")).toHaveValue("test")
    })

  /*   test("Call inputSearch when keyDown", () => {
        //const inputSearch = jest.fn() // Mock Function

        render( <SearchBar /> )
        
        
        
    }) */



