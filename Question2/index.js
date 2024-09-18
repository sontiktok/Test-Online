async function fetchConcurrently(urls) {
  const requests = urls.map(async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching from ${url}:`, error);
      return null;
    }
  });

  return Promise.all(requests);
}

// Test Cases

(async () => {
  const urls1 = [
    "https://api.example.com/data1",
    "https://api.example.com/data2",
    "https://api.invalid.url",
  ];
  const result1 = await fetchConcurrently(urls1);
  console.log("Result 1:", result1);

  const urls2 = [
    "https://api.example.com/success",
    "https://api.example.com/failure",
  ];
  const result2 = await fetchConcurrently(urls2);
  console.log("Result 2:", result2);

  const urls3 = [
    "https://api.example.com/valid1",
    "https://api.example.com/valid2",
    "https://api.example.com/valid3",
  ];
  const result3 = await fetchConcurrently(urls3);
  console.log("Result 3:", result3);
})();
