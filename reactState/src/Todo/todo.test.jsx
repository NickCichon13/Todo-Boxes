import React from "react";
import {render, fireEvent} from "@testing-library/react";
import TodoList from "../TodoList";

it("renders without crashing", function () {
    render(<TodoList />);
})

it("matches the snapshit", function () {
    const { asFragment } = render(<TodoList />)
    expect(asFragment()).toMatchSnapshot();
});

it("Should render new todo task", function () {
    const {queryByText, getByLableText} = render(<TodoList />)
    const input = getByLableText("task");
    const btn = queryByText("Add Task");
    expect(queryByText('Todo Task: Wash all clothes')).not.toBeInTheDocument();
    fireEvent.change(input, {target: {value: 'Wash all clothes'} });
    fireEvent.click(btn);
    expect(queryByText('Todo Task: Wash all clothes')).toBeInTheDocument();
});

it("Should edit an existing task", function () {
    const {queryByText, getByLableText} = render(<TodoList />)
    const input = getByLableText("newTask");
    const btn = queryByText("Edit Task");
    expect(queryByText('Todo Task: only wash my clothes')).not.toBeInTheDocument
    expect(queryByText('Todo Task: Wash all clothes')).toBeInTheDocument
    fireEvent.chnge(input, {target: {value: 'only wash my clothes'} });
    fireEvent.click(btn);
    expect(queryByText('Todo Task: only wash my clothes')).toBeInTheDocument
})