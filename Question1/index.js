async function fetchSequentially(urls) {
  let results = [];
  let previousResponse = null;

  for (let url of urls) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ previousData: previousResponse }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      results.push(data);
      previousResponse = data;
    } catch (error) {
      console.error(`Error fetching from ${url}:`, error);
      results.push(null);
      previousResponse = null;
    }
  }

  return results;
}

(async () => {
  const urls1 = [
    "https://api.example.com/step1",
    "https://api.example.com/step2",
    "https://api.invalid.url",
  ];
  const result1 = await fetchSequentially(urls1);
  console.log("Result 1:", result1);

  const urls2 = [
    "https://api.example.com/stepA",
    "https://api.example.com/stepB",
    "https://api.example.com/stepC",
  ];
  const result2 = await fetchSequentially(urls2);
  console.log("Result 2:", result2);

  const urls3 = ["https://api.example.com/only"];
  const result3 = await fetchSequentially(urls3);
  console.log("Result 3:", result3);
})();
