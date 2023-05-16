const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  test("Returns the literal '0' when given no input", () => {
        const sut = deterministicPartitionKey();
        expect(sut).toBe("0");
  });

  test("Should return trivial partition key when event has no partitionKey", () => {
    const event = {};
    const sut = deterministicPartitionKey(event);
    expect(sut).toEqual("c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862");
  });


  test("Should return the partition key if it exists", () => {
    const mockEvent = { partitionKey: "abc" };
    const sut = deterministicPartitionKey(mockEvent);
    expect(sut).toBe("abc");
  });

  test("Should return the hash of the event as the partition key when event has no partitionKey", () => {
    const event = { key: "value" };
    const result = deterministicPartitionKey(event);
    const expectedHash = crypto
      .createHash("sha3-512")
      .update(JSON.stringify(event))
      .digest("hex");
    expect(result).toEqual(expectedHash);
  });
});
