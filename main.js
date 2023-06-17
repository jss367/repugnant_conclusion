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
  for (let i = 0; i < populations.length; i++) {
      let population = populations[i];

      // Update the name, description, and button
      document.getElementById(`name${String.fromCharCode(65 + i)}`).innerText = population.name;
      document.getElementById(`description${String.fromCharCode(65 + i)}`).innerText = population.description;
      document.getElementById(`choose${String.fromCharCode(65 + i)}`).addEventListener('click', () => handleChoice(population));

      // Update the rectangle
      let rectangle = document.getElementById(`rectangle${String.fromCharCode(65 + i)}`);
      rectangle.style.width = `${population.quantity / 100}px`;
      rectangle.style.height = `${population.quality * 10}px`;
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
