import { render, screen } from '@testing-library/react'
import React from 'react';
import Articles from './Articles'
import { BLOCKS } from '@contentful/rich-text-types';

test("articles renders", async () => {
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
        
    render(<Articles articles={mockArticles} />)
    const article = screen.getAllByTestId("articles-a")
    expect(article).toHaveLength(mockArticles.length)
})