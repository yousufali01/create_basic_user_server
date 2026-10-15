import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Users are coming soon!");
}); 

//fake data eita database a thakbe apatoto eikhane kortese 

const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jony Doe', email: 'jony.doe@example.com' },
    { id: 3, name: 'Jahid Hasan', email: 'jahid.hasan@example.com' },
    { id: 4, name: 'Fahim Ahmed', email: 'fahim.ahmed@example.com' },
    { id: 5, name: 'Rahim Uddin', email: 'rahim.uddin@example.com' },
    { id: 6, name: 'Sakib Khan', email: 'sakib.khan@example.com' },
    { id: 7, name: 'Tanvir Islam', email: 'tanvir.islam@example.com' },
    { id: 8, name: 'Nusrat Jahan', email: 'nusrat.jahan@example.com' },
    { id: 9, name: 'Sadia Akter', email: 'sadia.akter@example.com' },
    { id: 10, name: 'Mehedi Hasan', email: 'mehedi.hasan@example.com' },
];


app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});