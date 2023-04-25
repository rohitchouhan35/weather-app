const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Vapi';
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': 'd8de83bd88msh12ae0fef0181fbfp1f9bdbjsn31f5a7826477',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

async function city() {
    const searchText = "Delhi";
    document.getElementById("searchForm").addEventListener("submit", async function(event) {
        event.preventDefault(); // Prevent form submission
      
        // Retrieve the value from the input field
        const searchInput = document.getElementById("searchInput");
        const searchText = searchInput.value;
        
        // Do something with the search text
        // console.log("Search Text: " + searchText);
        // You can use the searchText for further processing, such as sending it to a server for search functionality, etc.
        
        const newUrl =  url.replace('Vapi', searchText);
        // console.log(newUrl);
        
        try {
            const response = await fetch(newUrl, options);
            const result = await response.text();
            console.log(result);
            const weatherData = JSON.parse(result);
            document.getElementById("temp").textContent = weatherData.temp;
        } catch (error) {
            console.error(error);
        }
    });

    console.log("start");
    return searchText;
}
 
city();
