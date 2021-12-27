import React from "react"
import { render, screen } from "@testing-library/react"
import NotFoundPage from "./404"
import { useStaticQuery } from "gatsby"

beforeEach(() => {
  useStaticQuery.mockImplementation(() => ({
    site: {
      siteMetadata: {
        author: 'Clark',
        description: 'My description',
        title: 'My title',
      },
    },
  }))
})

describe("404 page", () => {
  it("renders correctly", () => {
    expect(() => render(<NotFoundPage />)).not.toThrow()
  })
  
  it("has button to return to main page", () => {
    render(<NotFoundPage />)
  
    const returnHomeButton = screen.getByRole("button")
    expect(returnHomeButton).toBeInTheDocument()
    expect(returnHomeButton).toHaveTextContent("Take Me Home")
  })
})
