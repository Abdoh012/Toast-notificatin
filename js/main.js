// Variables
const btns = document.querySelectorAll("button"); // The three buttons
const notificationsContainer = document.querySelector(".notifications"); // Notifications container

let notificationContainer; // Notifications container
let notification; // Notification
// End of variables

// Functions

// Remove notification after 10 seconds
function removeNotification(className) {
  setTimeout(() => {
    notification = document.querySelector(`.notifications .${className}`);
    notification.remove();
  }, 10000);
}

// Add notification to the notifications container
function addNotification(className, faType) {
  // Create notification container
  notificationContainer = document.createElement("div");
  notificationContainer.classList.add(className, "center"); // Add classe to notification container
  notificationContainer.innerHTML = `<i class="fa-solid ${faType} center" style="color:#ffffff;"></i>Succefully submitted<span></span>`;
  notificationsContainer.append(notificationContainer); // Add notification container to the notifications container
  removeNotification(className);
}
// End of functions

// onclick event for each button
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // If notifications more than 8 stop adding them
    if (notificationsContainer.children.length < 8) {
        // onclick => success button
      if (e.target.className === "success") {
        addNotification("true", "fa-check");
        // onclick => error button
      } else if (e.target.className === "error") {
        addNotification("false", "fa-xmark");
        // onclick => invalid button
      } else if (e.target.className === "invalid") {
        addNotification("invalid", "fa-exclamation");
      }
    }
  });
});
