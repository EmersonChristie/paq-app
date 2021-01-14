const request = async (url, options) => {
  // we can swap out fetch with another library later on if needed
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("🚀 ~ file: request.js ~ line 9 ~ request ~ response", response);

  return await response.json();
};

export default request;
