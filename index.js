function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ name, email })
  })
  .then(response => response.json())
  .then(data => {
    const id = data.id;
    const newIdElement = document.createElement("p");
    newIdElement.textContent = `New ID: ${id}`;
    document.body.appendChild(newIdElement);
  })
  .catch(error => {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = `Error: ${error.message}`;
    document.body.appendChild(errorMessage);
  });
}
