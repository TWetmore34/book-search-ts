import { fireEvent, render, screen } from "@testing-library/react"
import renderWProvider from "../helper/renderWProvider"
import Wishlist from "./Wishlist"
import BookList from "../searchResults/BookList"
describe("Wishlist tests", () => {
    const {Ui: WishListUi}: {Ui: () => JSX.Element} = renderWProvider(Wishlist, {
        wishlist: {
        0: {title: "", id: 0}
    }, books: {
        loading: false,
        bookList: [],
        error: null
    },
    notifs: []
})
    test("State Loads and renders", () => {
        render(<WishListUi />)
        const liEl = screen.queryAllByRole("list")
        expect(liEl).toHaveLength(1)
    })

    test("delete btn works", () => {
        render(<WishListUi />)
        const btnEl = screen.queryAllByRole("button")
        expect(btnEl[0]).toBeInTheDocument()
        expect(btnEl).toHaveLength(1)
        fireEvent.click(btnEl[0])
        const newBtnEl = screen.queryAllByRole("button")
        expect(newBtnEl).toHaveLength(0)
    })
})