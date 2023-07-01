// Initialize the universes
let universes = [
  {
      name: "Universe A",
      description: "Universe A includes a group of people with high welfare...",
      populations: [
        {quantity: 10, welfare: 100}
      ]
  }
];

// Function to display the universe choices to the user
function displayChoices() {
  // Clear previous display
  document.getElementById('simulation').innerHTML = '';
  
  for (let i = 0; i < universes.length; i++) {
      let universe = universes[i];

      // Create HTML elements for the universe
      let universeElement = document.createElement('div');
      universeElement.className = 'universe';
      universeElement.innerHTML = `
        <h3>${universe.name}</h3>
        <p>${universe.description}</p>
        <div class="rectangle-container" id="rectangle-container${i}">
        </div>
        <button id="choose${i}">Choose this universe</button>
      `;
      
      // Add the universe element to the simulation section
      document.getElementById('simulation').appendChild(universeElement);

      // Add an event listener to the button
      document.getElementById(`choose${i}`).addEventListener('click', () => handleChoice(universe));

      // Add rectangles for the populations
      for (let j = 0; j < universe.populations.length; j++) {
          let population = universe.populations[j];
          let rectangle = document.createElement('div');
          rectangle.className = 'rectangle';
          rectangle.style.width = `${population.quantity}px`;
          rectangle.style.height = `${population.welfare}px`;
          document.getElementById(`rectangle-container${i}`).appendChild(rectangle);
      }
  }
}

// Function to handle the user's choice
function handleChoice(choice) {
  document.getElementById('choiceDisplay').innerText = `You chose ${choice.name}.`;

  // Generate the next universe
  let lastUniverseLetter = choice.name.slice(-1);
  let nextUniverseLetter = String.fromCharCode(lastUniverseLetter.charCodeAt(0) + 1);
  let newNumPpl, newHappiness;
  if (choice.populations.length > 1) {
    // If the universe has two populations, combine them
    newNumPpl = [choice.populations[0].quantity + choice.populations[1].quantity];
    newHappiness = [(choice.populations[0].welfare + choice.populations[1].welfare) / 2];
  } else {
    // If the universe has one population, split it into two
    newNumPpl = [choice.populations[0].quantity, 2 * choice.populations[0].quantity];
    newHappiness = [choice.populations[0].welfare, choice.populations[0].welfare * 0.9];
  }
  
  let newUniverse = {
    name: `Universe ${nextUniverseLetter}`,
    description: `Universe ${nextUniverseLetter} includes a group of people with welfare...`,
    populations: newNumPpl.map((quantity, index) => ({quantity: quantity, welfare: newHappiness[index]}))
  };
  universes = [choice, newUniverse];
  
  // Update the display
  displayChoices();
}

// Call the displayChoices function when the page loads
window.onload = displayChoices;
