let url = process.env.REACT_API_URL;
export async function getBooks() {
  try {
    console.log(url);

    let response = await fetch(
      `https://strive-bookstore-be.herokuapp.com/books/`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      return await response.json();
    } else {
      let error = await response.json();
      return error;
    }
  } catch (error) {
    return error;
  }
}
