import { render, screen } from '@testing-library/react'
import Card from './Card'

test("card renders", () => {
    render(<Card title="" description="" slug="" />)
    const cardA = screen.getByTestId("card-a")
    const cardH3 = screen.getByTestId("card-h3")
    const cardP = screen.getAllByTestId("card-p")
    expect(cardA).toBeInTheDocument()
    expect(cardH3).toBeInTheDocument()
    expect(cardP[0]).toBeInTheDocument()
    expect(cardP[1]).toBeInTheDocument()
})