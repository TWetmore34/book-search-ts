import React, {useState} from 'react'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { fetchBooks } from '../../redux/books/bookSlice'
const Search = () => {
    const dispatch = useAppDispatch();
    const [inputValue, setInputValue] = useState<string>("")
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setInputValue(e.target.value)
    }
    const handleSearchSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if(inputValue.trim() !== "") {
          dispatch(fetchBooks(inputValue))
        }
    }
  return (
    <form>
        <input placeholder='Search' onChange={handleInputChange} value={inputValue} type="text" />
        <button className="btn--submit" onClick={handleSearchSubmit}>Submit</button>
    </form>
  )
}

export default Search