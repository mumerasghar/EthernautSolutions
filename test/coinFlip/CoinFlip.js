const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Lock", function () {
  before(async function () {
    const coinFlip = await ethers.getContractFactory("CoinFlip")
    const flip = await ethers.getContractFactory("Flip")

    this.CoinFlip = await coinFlip.deploy()
    this.Flip = await flip.deploy(this.CoinFlip.address)
  });

  it("Flip", async function () {
    for (let i = 0; i < 10; i++) {
      const tx = await this.Flip.buldStreak()
      let out = await tx.wait()
      console.log(`\tresult:${out.events[0].args.result}\thash:${out.events[0].args.hash}`)
    }
  })
});
