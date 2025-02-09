const sendMail = require("./mailer");

sendMail("fahim.cse.bubt@gmail.com", "Test Email", "Hey Fahim", "<p>Found your Mew!</p>")
  .then(() => console.log("Test email sent!"))
  .catch((err) => console.error("Failed to send test email:", err));
