import { render, screen } from "@testing-library/react";
import App from "./App";

test("Check if page renders contains Rea-Group", () => {
  render(<App />);
  const linkElement = screen.getByAltText(/Rea Group Logo/i);
  expect(linkElement).toBeInTheDocument();
});
