import React from "react"
import { render, screen } from "@testing-library/react"
import NotFoundPage from "./404"

test("404 page renders", () => {
  expect(() => render(<NotFoundPage />)).not.toThrow()
})

test("404 page has button to return to main page", () => {
  render(<NotFoundPage />)

  const returnHomeButton = screen.getByLabelText("return home")
  expect(returnHomeButton).toBeInTheDocument()
  expect(returnHomeButton).toHaveTextContent("Take Me Home")
})
