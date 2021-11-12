import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting items on screen", () => {
  test("renders main title hello world", () => {
    // Arrange
    render(<Greeting />);
    //Act

    //Assert
    const headingEl = screen.getByText("Hello World", { exact: false });
    expect(headingEl).toBeInTheDocument();
  });

  test('renders part of paragraph "how to test"', () => {
    // Arrange
    render(<Greeting />);

    //Assert
    const partOfParag = screen.getByText(/how to test/i);
    expect(partOfParag).toBeInTheDocument();
  });

  test("rendes title prop on cmp", () => {
    render(<Greeting title="testing123" />);

    const renderedTitle = screen.getByText("testing123");

    expect(renderedTitle).toBeInTheDocument();
  });
});

describe("Button toggles paragraph", () => {
  // new text after button press
  test('buton renders new paragraph "Do we really, really?"', () => {
    // Arrange
    render(<Greeting />);
    //Act
    const mainBtn = screen.getByRole("button");
    userEvent.click(mainBtn);

    //Assert
    const changedPara = screen.getByText("Do we really, really?");
    expect(changedPara).toBeInTheDocument();
  });

  test('button press hides "We now how to test now"', () => {
    // Arrange
    render(<Greeting />);
    //Act
    const mainBtn = screen.getByRole("button");
    userEvent.click(mainBtn);

    // Assert
    // getByText - jei neranda meta klaida
    // queryByText - jei neranda grazina null
    const wasPara = screen.queryByText("We now how to test now");
    expect(wasPara).toBeNull();
  });
});
