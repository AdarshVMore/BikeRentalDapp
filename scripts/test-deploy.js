const { ethers } = require("hardhat")
const { assert } = require("chai")

describe("SimpleStorage", () => {
  let simpleStorageFactory, simpleStorage
  beforeEach(async () => {
    const simpleStorageFactory = await ethers.getContractFactory(
      "SimpleStorage"
    )
    const simpleStorage = await simpleStorageFactory.deploy()
  })

  it("should star with fav number", async () => {
    const oldnum = await simpleStorage.retrieve()
    //const newnum = await simpleStorage.store("7")
    const num = "0"
    assert.equal(num, oldnum.toString())
  })
})
