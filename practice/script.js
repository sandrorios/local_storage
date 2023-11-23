function populateStorage(){
    // Create a key-value pair in localStorage
    localStorage.setItem('name', 'John Doe');

    // Get the value of the key 'name' form the localStorage
    const name = localStorage.getItem('name');

    // Display the value of the key 'name'
    console.log(name); // "Sandro"
}

// Call the populateStorage() function
populateStorage();