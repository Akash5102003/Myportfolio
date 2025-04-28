// script.js

// Example: Show an alert when clicking on "Live Demo"
document.addEventListener("DOMContentLoaded", function() {
    const demoButtons = document.querySelectorAll('.btn-primary');
  
    demoButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        if (button.textContent.includes("Live Demo")) {
          event.preventDefault();
          alert("Demo link will be available soon!");
        }
      });
    });
  });
  