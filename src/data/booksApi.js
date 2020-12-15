let url = process.env.REACT_API_URL;
export async function getBooks() {
  try {
    console.log("dnasjdnfadfadss");
    let myHeaders = new Headers();
    myHeaders.append("Origin", url);
    let response = await fetch(`${url}/bookssss/`, {
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
