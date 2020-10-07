//this file contains any calls that are necessary upon loading the browser window


defineParams();

//this will load in the answers and define the boxes
loadAnswers();

//attach listener on window resize
window.addEventListener("resize", resizer);

//this will load the responses
// loadResponses(params.surveyFile);