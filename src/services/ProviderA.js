class ProviderA {
  async sendEmail(email) {
    const success = Math.random() > 0.3; // 70% chance of success
    if (!success) throw new Error("ProviderA failed");
    console.log("ProviderA: Email sent");
    return true;
  }
}
module.exports = ProviderA;