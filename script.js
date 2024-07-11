// Select the toggle container element
const toggleContainer = document.getElementById('dark-mode-toggle');

// Check if dark mode was previously enabled
const currentMode = localStorage.getItem('dark-mode') || 'light';

// Apply the saved mode
if (currentMode === 'dark') {
  document.body.classList.add('dark-mode');
}

// Add an event listener to the toggle container to listen for clicks
toggleContainer.addEventListener('click', () => {
  // Toggle the 'dark-mode' class on the body element
  document.body.classList.toggle('dark-mode');
  
  // Save the user's preference in localStorage
  const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('dark-mode', mode);
});

// Add an event listener for keypress to allow toggling with the Enter key
toggleContainer.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    toggleContainer.click();
  }
});
