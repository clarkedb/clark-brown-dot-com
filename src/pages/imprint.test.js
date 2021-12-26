import React from "react"
import { render } from "@testing-library/react"
import Imprint from "./imprint"

test("Imprint page renders", () => {
  expect(() => render(<Imprint />)).not.toThrow()
})
