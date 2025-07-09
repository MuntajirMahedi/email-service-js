const ProviderA = require("./ProviderA");
const ProviderB = require("./ProviderB");
const { sleep } = require("../utils/retry");
const { rateLimiter } = require("../utils/rateLimiter");
const sentEmails = require("../store/sentEmails");

class EmailService {
  constructor() {
    this.providerA = new ProviderA();
    this.providerB = new ProviderB();
    this.retryLimit = 3;
  }

  async send(email, idempotencyKey) {
    if (sentEmails.has(idempotencyKey)) {
      console.log("Duplicate email prevented (idempotency)");
      return;
    }

    if (!rateLimiter.allow()) {
      console.log("Rate limit exceeded");
      return;
    }

    let providers = [this.providerA, this.providerB];
    for (let provider of providers) {
      let success = await this.trySendWithRetry(provider, email);
      if (success) {
        sentEmails.add(idempotencyKey);
        return true;
      }
    }

    console.log("All providers failed");
    return false;
  }

  async trySendWithRetry(provider, email) {
    for (let i = 0; i < this.retryLimit; i++) {
      try {
        await provider.sendEmail(email);
        return true;
      } catch (err) {
        console.log(`Retry ${i + 1} failed: ${err.message}`);
        await sleep(2 ** i * 100);
      }
    }
    return false;
  }
}

module.exports = EmailService;