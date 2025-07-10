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
function addNotification(className, faType, text) {
  // Create notification container
  notificationContainer = document.createElement("div");
  notificationContainer.classList.add(className, "center"); // Add classe to notification container
  notificationContainer.innerHTML = `<i class="fa-solid ${faType} center" style="color:#ffffff;"></i>${text}<span></span>`;
  notificationsContainer.append(notificationContainer); // Add notification container to the notifications container
  removeNotification(className);
}
// End of functions