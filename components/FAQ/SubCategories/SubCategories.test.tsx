import { render, screen } from '@testing-library/react'
import SubCategories from './SubCategories'
import { BLOCKS } from '@contentful/rich-text-types';

test("subcategories renders", async () => {
    const mockArticles = [
        {
            question: "testQuestion1",
            answer: {
                json: {
                    nodeType: BLOCKS.DOCUMENT as const,
                    data: {},
                    content: []
                }
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
                json: {
                    nodeType: BLOCKS.DOCUMENT as const,
                    data: {},
                    content: []
                }
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
                json: {
                    nodeType: BLOCKS.DOCUMENT as const,
                    data: {},
                    content: []
                }
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

    const mockSubs = [
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
        
    render(<SubCategories subCategories={mockSubs} articles={mockArticles}/>)
    const subCategories = screen.getAllByTestId("subs-a")
    const articles = screen.getAllByTestId("article")
    expect(subCategories).toHaveLength(mockSubs.length)
    expect(articles).toHaveLength(mockArticles.length)
})