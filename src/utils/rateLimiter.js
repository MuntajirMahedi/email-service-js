let tokens = 5;
let lastRefill = Date.now();

function refill() {
  let now = Date.now();
  let elapsed = (now - lastRefill) / 1000;
  if (elapsed > 60) {
    tokens = 5;
    lastRefill = now;
  }
}

function allow() {
  refill();
  if (tokens > 0) {
    tokens--;
    return true;
  }
  return false;
}

module.exports = { rateLimiter: { allow } };