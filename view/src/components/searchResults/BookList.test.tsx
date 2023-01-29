import { render, screen } from "@testing-library/react"
import renderWProvider from "../helper/renderWProvider"
import BookList from "./BookList"

// jest.mock("fetch")
describe("book list tests", () => {
    const {Ui: BookUi}: {Ui: () => JSX.Element} = renderWProvider(BookList, {
        wishlist: {}, 
        books: {
            loading: false,
            bookList: [
            {
                title: "",
                authors: [],
                publishDate: "",
                publisher: "",
                imgSrc: "",
                id: 0,
                description: ""
        }, {
                title: "",
                authors: [],
                publishDate: "",
                publisher: "",
                imgSrc: "",
                id: 1,
                description: ""
        }],
            error: null
    }, 
        notifs: []
})
    test("btn click should render list elements and notifications, then notifications should disappear", () => {
        render(<BookUi />)

        const liEl = screen.queryAllByTestId("list-el")
        expect(liEl).toHaveLength(2)
    })
})