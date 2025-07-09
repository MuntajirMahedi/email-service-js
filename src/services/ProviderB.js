class ProviderB {
  async sendEmail(email) {
    const success = Math.random() > 0.3;
    if (!success) throw new Error("ProviderB failed");
    console.log("ProviderB: Email sent");
    return true;
  }
}
module.exports = ProviderB;