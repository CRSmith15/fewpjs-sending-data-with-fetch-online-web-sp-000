// Add your code here
function submitData(name, email){
  let configObj = {
    headers: {
      "Content-Type" : "application/json"
      "Accept" : "application/json"
    },
    userData = {
      name: `${name}`,
      email: `${email}`
    };
    body: JSON.stringify(userData)
  };
  fetch("http://localhost:3000/users", configObj)
    .then(function(resp => resp.json()));
    .then(function(object) {
      console.log(object);
    })

}
