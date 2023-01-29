export default async function bookAPI (queryValue: string) {
let url: string = `https://www.googleapis.com/books/v1/volumes?q=${queryValue.trim()}&startIndex=0&maxResults=20`
    let res = await fetch(url)
    let data = res.json();

    return data
}
