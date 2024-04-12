const FetchData = async (url) => {
    const response = await fetch(url)
    const blogs = await response.json()
    return blogs
}

export {FetchData}