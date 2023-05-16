const { deterministicPartitionKey,
  isString,
  stringify,
  createHash } = require("./dpk");
const crypto = require("crypto");

// describe("deterministicPartitionKey", () => {
//   it("Returns the literal '0' when given no input", () => {
//     const trivialKey = deterministicPartitionKey();
//     expect(trivialKey).toBe("0");
//   });
// });

describe("deterministicPartitionKey", () => {
  test("Returns the literal '0' when given no input", () => {
        const trivialKey = deterministicPartitionKey();
        expect(trivialKey).toBe("0");
  });

  test("Should return the partition key if it exists", () => {
    const mockEvent = { partitionKey: "abc" };
    const sut = deterministicPartitionKey(mockEvent);
    expect(sut).toBe("abc");
  });

})