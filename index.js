const EmailService = require("./src/services/EmailService");

(async () => {
  const service = new EmailService();
  const email = {
    to: "recipient@example.com",
    subject: "Hello!",
    body: "Welcome to the email service demo"
  };

  await service.send(email, "email-key-1");
})();