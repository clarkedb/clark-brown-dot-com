import React from "react"
import { render } from "@testing-library/react"
import Privacy from "./privacy"

test("Privacy page renders", () => {
  expect(() => render(<Privacy />)).not.toThrow()
})
