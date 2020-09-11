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

} 
