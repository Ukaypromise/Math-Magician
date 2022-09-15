import { render, screen } from '@testing-library/react';
import App from './App';
import Home from "./components/Home";
import Calculator from "./components/Calculator";
import Quote from "./components/Quote";
// import userEvent from "@testing-library/user-event";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("Math Magicians");
  expect(linkElement).toBeInTheDocument();
});

test("Home router", () => {
  const hm = render(<Home />);
  expect(hm).toMatchSnapshot();
});
test("Calculator router", () => {
  const hm = render(<Calculator />);
  expect(hm).toMatchSnapshot();
});

test("Quote router", () => {
  const hm = render(<Quote />);
  expect(hm).toMatchSnapshot();
});
