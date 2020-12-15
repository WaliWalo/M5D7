let url = process.env.REACT_API_URL;
export async function getBooks() {
  try {
    console.log("dnasjdns");
    let myHeaders = new Headers();
    myHeaders.append("Origin", url);
    let response = await fetch(`${url}/books/`, {
      method: "GET",
      headers: myHeaders,
    });
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
