const EmailService = require("../src/services/EmailService");

(async () => {
  const service = new EmailService();
  const email = {
    to: "test@example.com",
    subject: "Test",
    body: "This is a test email"
  };
  await service.send(email, "12345");
  await service.send(email, "12345"); // Should prevent duplicate
})();