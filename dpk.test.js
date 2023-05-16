const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

jest.mock("crypto", () => ({
  createHash: jest.fn().mockReturnThis(),
  update: jest.fn().mockReturnThis(),
  digest: jest.fn(),
}));

const mockIsString = jest.fn();
const mockStringify = jest.fn();
const mockCreateHash = jest.fn();

beforeEach(() => {
  crypto.createHash.mockClear();
  crypto.update.mockClear();
  crypto.digest.mockClear();

  mockIsString.mockClear();
  mockStringify.mockClear();
  mockCreateHash.mockClear();
});


describe("deterministicPartitionKey", () => {
  test("Returns the literal '0' when given no input", () => {
        const sut = deterministicPartitionKey();
        expect(sut).toBe("0");
  });

  test("Should return trivial partition key when event has no partitionKey", () => {
    const event = {};
    const sut = deterministicPartitionKey(event);
    expect(sut).toEqual("0");
  });


  test("Should return the partition key if it exists", () => {
    const mockEvent = { partitionKey: "abc" };
    const sut = deterministicPartitionKey(mockEvent);
    expect(sut).toBe("abc");
  });
});
