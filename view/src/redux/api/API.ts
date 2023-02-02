import { IUser } from "../../types";
const getBooksAPI = async (queryValue: string) => {
let url: string = `https://www.googleapis.com/books/v1/volumes?q=${queryValue.trim()}&startIndex=0&maxResults=20`
    let res = await fetch(url)
    let data = res.json();
    return data
}

const loginAPI = async (user: IUser) => {
    let url = "/users/login"
    let res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(user),
        headers:{
            'Content-Type': 'application/json',
            "authorization": "Headers"
        }
    })
    let data = await res.json()
    return data
}

const signupAPI = async (newUser: IUser) => {
    let url = "/users/"
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers:{
            'Content-Type': 'application/json',
            "authorization": "Headers"
        }
    })
    const data = await res.json()
    return data
}

export {getBooksAPI, loginAPI, signupAPI}