import {render, screen, fireEvent} from "@testing-library/react";
import Search from "./Search";
import renderWProvider from "../helper/renderWProvider"

describe("search bar tests", () => {
    let {Ui: WrappedSearch} = renderWProvider(Search)

    test("should render search btn", () => {
        render(<WrappedSearch />)
        const btnElement = screen.getByText(/submit/i);
        expect(btnElement).toBeInTheDocument();
    })
    test("should render input element", () => {
        render(<WrappedSearch/>)
        const inputEl = screen.getByPlaceholderText(/Search/i)
        expect(inputEl).toBeInTheDocument()
    })
    test("input should react to changes", () => {
        render(<WrappedSearch />)
        const inputEl: HTMLInputElement = screen.getByPlaceholderText(/Search/i)
        fireEvent.change(inputEl, {target: {value: "a"}})
        expect(inputEl.value).toBe("a")
    })
})
