const { network } = require("hardhat")

async function moveTime(amount) {
    console.log("Moving blocks ...")
    await network.provider.send("evm_increasedTime", [amount])

    console.log(`Moved forward in time ${amount} seconds`)
}

module.exports = {
    moveTime,
}
