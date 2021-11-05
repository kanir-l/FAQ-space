import { render, screen } from '@testing-library/react'
import SubCategories from './SubCategories'

test("card renders", async () => {
    const mockArticle = [
        {
            question: "testQuestion1",
            answer: {
                json: {}
            },
            slug: "slug1",
            category: {
                title: "test2",
                slug: "test2"
            },
            subCategory: {
                title: "test1",
                slug: "test1",
                category: {
                    title: "test2",
                    slug: "test2"
                } 
            }
        },
        {
            question: "testQuestion2",
            answer: {
                json: {}
            },
            slug: "slug2",
            category: {
                title: "test4",
                slug: "test4"
            },
            subCategory: {
                title: "test3",
                slug: "test3",
                category: {
                    title: "test4",
                    slug: "test4"
                } 
            }
        },
        {
            question: "testQuestion3",
            answer: {
                json: {}
            },
            slug: "slug3",
            category: {
                title: "test6",
                slug: "test6"
            },
            subCategory: {
                title: "test5",
                slug: "test5",
                category: {
                    title: "test6",
                    slug: "test6"
                } 
            }
        },
    ]

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
        
    render(<SubCategories subCategories={mockSub} articles={mockArticle}/>)
    const subCategory = screen.getAllByTestId("subcategory")
    const article = screen.getAllByTestId("article")
    expect(subCategory).toHaveLength(mockSub.length)
    expect(article).toHaveLength(mockArticle.length)
})