// Function to start the countdown timer
function startTimer() {
  // Get the user inputted date and time from the input field
  const meetingTimeInput = document.getElementById("meeting-time").value;

  // Check if the input field has a valid value
  if (meetingTimeInput === "") {
      alert("Please select a valid date and time.");
      return;
  }

  // Convert the inputted time into a Date object
  const countDownDate = new Date(meetingTimeInput).getTime();

  // Update the countdown every second using setInterval
  const x = setInterval(function() {
      
      // Get the current date and time
      const now = new Date().getTime();

      // Calculate the distance between now and the countdown date
      const distance = countDownDate - now;

      // Calculate the time remaining in days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the countdown on the page
      document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

      // If the countdown has finished, display a message and stop the timer
      if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
          triggerVisualEffects(); // Trigger effects when the timer expires
      }
  }, 1000); // Set the interval to update every 1 second
}

// Function to trigger visual effects when the timer expires
function triggerVisualEffects() {
  // Example of visual effects: changing the background color and adding confetti
  document.body.style.backgroundColor = "#ffcccc"; // Light red background color

  // You can trigger additional effects here (e.g., confetti, sounds, etc.)
  showConfetti(); // Call a function to show confetti
}

// Function to show confetti (simple visual effect)
function showConfetti() {
  const confettiContainer = document.createElement("div");
  confettiContainer.id = "confetti-container";
  document.body.appendChild(confettiContainer);

  for (let i = 0; i < 100; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.animationDelay = Math.random() * 2 + "s";
      confettiContainer.appendChild(confetti);
  }
}
