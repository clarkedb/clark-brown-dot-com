import React from "react"
import { render } from "@testing-library/react"
import IndexPage from "."

test("IndexPage renders", () => {
  expect(() => render(<IndexPage />)).not.toThrow()
})
