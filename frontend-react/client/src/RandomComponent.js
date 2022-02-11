import React, { useState, useEffect } from 'react';

function Example() {
  const [response, setResponse] = useState("STARTING UP...");

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Hello`;
    if (response == "STARTING UP...") {
      setResponse("LOADING...");

      console.log("FETCH");

      fetch(`/api`)
      .then(response=>response.json())
      .then((response) => {
        console.log("response:");
        console.log(response);
        setResponse(JSON.stringify(response));
      })
      .catch((error) => {
        console.error(error);
        setResponse(JSON.stringify(error));
      });

    }
  });

  return (
    <div>
      <p>Below should display some kind of api response if the nestjs api is up and running.</p>
      <p>{response}</p>
    </div>
  );
}

export default Example;