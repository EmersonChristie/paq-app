const request = async (slug, options) => {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const url = `${BASE_URL}${slug}`;
  try {
    const response = await fetch(url, {
      ...options,
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      // credentials: "same-origin",
      withCredentials: true,
    });

    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export default request;
