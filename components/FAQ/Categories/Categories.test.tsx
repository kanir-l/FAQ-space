import { render, screen } from '@testing-library/react'
import Categories from './Categories'

test("card renders", async () => {
    const mockSub = [
        {
            title: "test1",
            slug: "test1",
            category: {
                title: "test2",
                slug: "test2"
            } 
        },
        {
            title: "test3",
            slug: "test3",
            category: {
                title: "test4",
                slug: "test4"
            } 
        },
        {
            title: "test5",
            slug: "test5",
            category: {
                title: "test6",
                slug: "test6"
            } 
        }
    ]
   
    render(<Categories subCategories={mockSub} />)
    const cardComponent = screen.getAllByTestId("card-a")
    expect(cardComponent).toHaveLength(mockSub.length)
})