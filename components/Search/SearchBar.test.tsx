import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar'


test("it renders", async () => {
    const onChange = jest.fn()
    const onSubmit= jest.fn();
    render(<SearchBar value="" onChange={onChange} onSubmit={onSubmit} />);
    const search = screen.getByPlaceholderText(/Search.../i)
    expect(search).toBeInTheDocument()
})

test("it calls onChange when the user types", async () => {
    const onChange = jest.fn();
    const onSubmit = jest.fn();
    render(<SearchBar value="" onChange={onChange} onSubmit={onSubmit} />);
    const search = screen.getByTestId("seach-input")
    userEvent.type(search, "test")
    expect(onChange).toBeCalledTimes(4);
})

test('it calls onSubmit when the user presses enter', async () => {
    const onChange = jest.fn();
    const onSubmit = jest.fn();
    render(<SearchBar value="" onChange={onChange} onSubmit={onSubmit} />);
    const search = screen.getByTestId('seach-input');
    fireEvent.submit(search);
    expect(onSubmit).toBeCalledTimes(1);
})


