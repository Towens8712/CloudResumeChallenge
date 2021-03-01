
function updateCounter(){
  fetch("https://ci6955nm7f.execute-api.us-east-1.amazonaws.com/prod/getVisitorCounter")
    .then(response => response.text())
    .then((body) => {
      document.getElementById("counter").innerHTML=body
    })
    .catch(function(error) {
      console.log(error); 
    });  
  }  