import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from "../test-utils/react-test-utils";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import TodoList from "../../app/features/items/TodoList";

const mockInitialState = {
  items: [
    { id: 1, title: "title 1", complete: false },
    { id: 2, title: "title 2 ", complete: false },
    { id: 3, title: "title 3 ", complete: true },
  ],
};

test("todo items render as expected", async () => {
  render(<TodoList></TodoList>, {
    initialState: mockInitialState,
  });

  const checkboxes = screen.getAllByRole("checkbox");

  expect(checkboxes).toHaveLength(3);
  expect(checkboxes[0]).not.toBeChecked();
  expect(checkboxes[1]).not.toBeChecked();
  expect(checkboxes[2]).toBeChecked();

  screen.getByText("title 1");
  screen.getByText("title 2");
  screen.getByText("title 3");

  expect(screen.getAllByText("Delete")).toHaveLength(3);
});

test("items can be added using the Add button", async () => {
  render(<TodoList></TodoList>);

  fireEvent.change(screen.getByRole("textbox"), {
    target: { value: "title 1" },
  });

  fireEvent.click(screen.getByText("Add"));

  await screen.findByText("title 1");
});

test("items can be added by pressing enter to submit", async () => {
  const user = userEvent.setup();

  render(<TodoList></TodoList>);

  const input = screen.getByRole("textbox");

  await user.type(input, "title 1{enter}");

  await screen.findByText("title 1");
});

test("multiple items can be added", async () => {
  const user = userEvent.setup();

  render(<TodoList></TodoList>);

  const input = screen.getByRole("textbox");

  await user.type(input, "title 1{enter}");
  await user.type(input, "title 2{enter}");

  await waitFor(() => {
    screen.getByText("title 1");
    screen.getByText("title 2");
  });
});

test("items with blank titles cannot be added", async () => {
  const user = userEvent.setup();

  render(<TodoList></TodoList>);

  const input = screen.getByRole("textbox");

  // Try adding item with blank title.
  const blankTitle = "   ";
  await user.type(input, `${blankTitle}{enter}`);

  // Also try adding it via the Add button.
  await user.click(screen.getByText("Add"));

  // Wait for something else to happen before we check.
  await user.type(input, "title 1{enter}");
  await screen.findByText("title 1");

  // Now we can check.
  expect(screen.queryByText(blankTitle)).not.toBeInTheDocument();
});

test("titles of added items get trimmed", async () => {
  const user = userEvent.setup();

  render(<TodoList></TodoList>);

  const input = screen.getByRole("textbox");
  await user.type(input, " title 1 {enter}");

  await screen.findByText("title 1");
});

test(`items' complete statuses can be toggled`, async () => {
  render(<TodoList></TodoList>, {
    initialState: mockInitialState,
  });

  const secondItemTitle = screen.getByText("title 2");
  const secondItemCheckbox = screen.getAllByRole("checkbox")[1];

  // Mark item as complete
  fireEvent.click(secondItemCheckbox);
  await waitFor(() => expect(secondItemCheckbox).toBeChecked());
  expect(secondItemTitle).toHaveClass("todo-item__title--complete");

  // Mark item as NOT complete
  fireEvent.click(secondItemCheckbox);
  await waitFor(() => expect(secondItemCheckbox).not.toBeChecked());
  expect(secondItemTitle).not.toHaveClass("todo-item__title--complete");
});

test(`items can be deleted`, async () => {
  render(<TodoList></TodoList>, {
    initialState: mockInitialState,
  });

  const secondItemDeleteButton = screen.getAllByText("Delete")[1];
  fireEvent.click(secondItemDeleteButton);

  await waitForElementToBeRemoved(screen.getByText("title 2"));
});
