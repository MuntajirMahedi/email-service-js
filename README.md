<<<<<<< HEAD
# Resilient Email Service (JavaScript)

## Features
- Retry with exponential backoff
- Fallback between two mock providers
- Idempotency to avoid duplicate emails
- Basic rate limiting
- Status logging

## How to Run

```bash
npm install
node index.js
```

## Project Structure

- `EmailService.js`: Main logic
- `ProviderA/B.js`: Mock email providers
- `retry.js`: Sleep utility for backoff
- `rateLimiter.js`: Simple token-bucket limiter
- `sentEmails.js`: Memory store for idempotency
=======
# email-service-js
>>>>>>> 359c7505a902ed9ace3129a423e58bd1e23d4b97
