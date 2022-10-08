const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("King", function () {
  before(async function () {
    const king = await ethers.getContractFactory("King")
    const kingMaker = await ethers.getContractFactory("KingMaker")

    this.King = await king.deploy()
    this.kingMaker = await kingMaker.deploy(this.King.address)
    await this.kingMaker.deployed()

    console.log(`\tking: ${this.King.address}`)
    console.log(`\tkingMaker: ${this.kingMaker.address}`)
  });

  it("KingMaker", async function () {

    const tx = await this.kingMaker.becomeOwner({ value: ethers.utils.parseEther("1") });
    console.log("\t" + await this.King._king())
    const t2 = await this.kingMaker.becomeOwner({ value: ethers.utils.parseEther("2") });
  })
});
