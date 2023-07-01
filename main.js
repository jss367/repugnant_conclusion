// Initialize the populations
let universes = [
  [
    {
        name: "Group A1",
        quantity: 10,
        welfare: 100
    }
  ],
  [
    {
        name: "Group B1",
        quantity: 10,
        welfare: 100
    },
    {
        name: "Group B2",
        quantity: 20,
        welfare: 90
    }
  ]
];

// Function to display the universe choices to the user
function displayChoices() {
  for (let i = 0; i < universes.length; i++) {
      let universe = universes[i];
      let universeName = String.fromCharCode(65 + i);
      let universeDescription = "This universe contains the following groups:\n";
      
      universe.forEach((population, index) => {
        universeDescription += `${population.name}: ${population.quantity} people, welfare ${population.welfare}\n`;
        
        // Update the rectangle
        let rectangle = document.getElementById(`rectangle${universeName}${index + 1}`);
        rectangle.style.width = `${population.quantity}px`;
        rectangle.style.height = `${population.welfare}px`;
        
        // Update the welfare and quantity values
        document.getElementById(`welfare${universeName}${index + 1}`).innerText = population.welfare;
        document.getElementById(`quantity${universeName}${index + 1}`).innerText = population.quantity;
      });
      
      // Update the name, description, and button
      document.getElementById(`name${universeName}`).innerText = `Universe ${universeName}`;
      document.getElementById(`description${universeName}`).innerText = universeDescription;
      document.getElementById(`choose${universeName}`).addEventListener('click', () => handleChoice(universe));
  }
}

// Function to handle the user's choice
function handleChoice(choice) {
  document.getElementById('choiceDisplay').innerText = `You chose a universe with ${choice.length} groups.`;
  
  // Generate the new universe
  let newUniverse = JSON.parse(JSON.stringify(choice)); // Create a deep copy of the last universe
  newUniverse.push({
    name: `Group ${String.fromCharCode(67 + universes.length % 26)}1`,
    quantity: choice[0].quantity * 2,
    welfare: choice[0].welfare - 10
  });
  universes.push(newUniverse);

  // Update the display
  displayChoices();
}

// Call the displayChoices function when the page loads
window.onload = displayChoices;
