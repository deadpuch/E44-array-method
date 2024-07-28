// 1. Create a function fetchData that returns a Promise. The Promise should resolve with the string "Data fetched successfully" after a delay of 2 seconds. Use setTimeout to simulate the delay. Test your function by calling it and using .then() to log the resolved value to the console.

function fetchdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      message = "Data fetched successfully";

      resolve(message);
    }, 2000);
  });
}

fetchdata().then((data) => {
  console.log(data);
});

// 2.  Modify the fetchData function from Question 1 to sometimes reject the Promise with an error message "Failed to fetch data". Modify your test to handle this rejection using .catch().

function errfetchdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      message = "Failed to fetch data";

      reject(message);
    }, 2000);
  });
}

errfetchdata().catch((data) => {
  console.log(data);
});

// 3. Convert the fetchData function from Question  1 to use async and await instead of .then(). Ensure to handle errors using try and catch

function tcfetchdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      message = "Data fetched successfully";

      resolve(message);
    }, 2000);
  });
}

async function newfetchdata() {
  try {
    const result = await tcfetchdata();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

newfetchdata();

// 4. Write a function "getCountryData" that fetches data from the public API " https://restcountries.com/v3.1/all ". Parse the JSON response and log the data to the console. Additionally, use DOM manipulation to display the data on the web page. Make sure to handle any errors that might occur during the fetch operation and display an appropriate error message in the div if the fetch fails. (deploy the webpage on github)

function getCountryData() {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => {
      return response.json();
    }) 
    .then((result) => {
      console.log(result);

      result.sort((a, b) => b.name.common.localeCompare(a.name.common));
      result.forEach((country) => {
        const contain = document.getElementById("dataContainer");

        const newcontain = document.createElement("h1");

        newcontain.innerText = country.name.common;

        contain.appendChild(newcontain);
      });
    })
    .catch((error) => {
      console.log(error);
      const container = document.getElementById("dataContainer");
      container.innerHTML = "Failed to fetch country data. Please try again later."
    });
}

