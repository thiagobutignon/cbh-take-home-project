const crypto = require("crypto");

function isString(value) {
  return typeof value === "string";
}

function stringify(value) {
  if (isString(value)) {
    return value;
  }
  return JSON.stringify(value);
}

function createHashAdapter(value) {
  return crypto.createHash("sha3-512").update(value).digest("hex");
}

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate = TRIVIAL_PARTITION_KEY;

  if (event && event.partitionKey) {
    candidate = stringify(event.partitionKey);
  } else if (event) {
    const data = stringify(event);
    candidate = createHashAdapter(data);
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = createHashAdapter(candidate);
  }
  
  return candidate;
};