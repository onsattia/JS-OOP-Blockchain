const Block = require("./block");

describe("Block", () => {
  beforeEach(() => {
    const data = "bar";
    const lastBlock = Block.genesis();
    const block = Block.mineBlock(lastBlock, data);
  });
  it("Sets the `data` to match the input", () => {});
  it("Sets the `lastHash` to match the hash of the last block", () => {});
});
