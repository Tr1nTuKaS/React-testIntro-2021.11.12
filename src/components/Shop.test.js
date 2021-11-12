import { render, screen } from "@testing-library/react";
import Shop from "./Shop";
test("Render shop items on screen", async () => {
  render(<Shop />);

  // getbyText, queryByTex - sync operacijos
  // findByText - async
  const shopItems = await screen.findAllByRole("listitem");
  expect(shopItems).not.toHaveLength(0);
  expect(shopItems).toHaveLength(20);
});
