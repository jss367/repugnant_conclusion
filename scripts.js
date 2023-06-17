// Initialize the populations
let populations = [
  {
      name: "Population A",
      description: "This population is smaller but has a high quality of life...",
      quantity: 1000,
      quality: 9
  },
  {
      name: "Population B",
      description: "This population is larger but has a lower quality of life...",
      quantity: 5000,
      quality: 5
  }
];

// Function to display the population choices to the user
function displayChoices() {
  const simulationSection = document.getElementById('simulation');

  // Clear the previous choices
  simulationSection.innerHTML = '';

  for (let i = 0; i < populations.length; i++) {
      let population = populations[i];

      // Create a new div for this population
      let populationDiv = document.createElement('div');

      // Add the name and description
      populationDiv.innerHTML = `<h3>${population.name}</h3><p>${population.description}</p>`;

      // Add a button that the user can click to choose this population
      let chooseButton = document.createElement('button');
      chooseButton.innerText = 'Choose this population';
      chooseButton.addEventListener('click', () => handleChoice(population));
      populationDiv.appendChild(chooseButton);

      // Add the population div to the simulation section
      simulationSection.appendChild(populationDiv);
  }
}

// Function to handle the user's choice
function handleChoice(choice) {
  alert(`You chose ${choice.name}, which has a quality of life rating of ${choice.quality} and a population of ${choice.quantity}.`);

  // Generate the new populations
  populations = [
      {
          name: "Population A",
          description: "This population is smaller but has a high quality of life...",
          quantity: choice.quantity - 1,
          quality: choice.quality + 1
      },
      {
          name: "Population B",
          description: "This population is larger but has a lower quality of life...",
          quantity: choice.quantity + 1,
          quality: choice.quality - 1
      }
  ];

  // Update the display
  displayChoices();
}

// Call the displayChoices function when the page loads
window.onload = displayChoices;
