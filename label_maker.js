// Exercise 1

let information = {
  name: "John Doe",
  address: "123 Main Street",
  city: "Phoenix",
  state: "Arizona",
  zip: "85224",
};

printContact(information);

function printContact() {
  console.log(`               
                ${information.name}
                ${information.address}
                ${information.city}, ${information.state} ${information.zip}`);
}
