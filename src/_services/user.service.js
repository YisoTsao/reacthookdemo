export const userService = {
  login
};

function login(phone, password) {
  var requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user: { phone: phone, password: password },
    })
  };

  return fetch("https://www.fishery.cloud/users/login", requestOptions)
    .then((response) => response.text())
    .then((user) => {
      console.log("----user----");
      var parseData = JSON.parse(user);
      console.log(parseData);
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    })
    .catch((error) => console.log("error", error));
}

function getUser(){
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMyIsInNjcCI6InVzZXIiLCJhdWQiOm51bGwsImlhdCI6MTU5NDUyNDc5MCwiZXhwIjoxNjE1NTYyNzU4LCJqdGkiOiJkYmNlNmYwOC00YWQ1LTQ3YTgtOGE2Yi1lNmY4OGRhMmYxYjQifQ.1zbFqfwjgQNB6LcR54qjR0_Th0ds1O--NOYnKCzvt_I");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  return fetch("https://www.fishery.cloud/api/v1/users/1", requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result);
      return result;
    })
    .catch(error => console.log('error', error));
}
function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}
