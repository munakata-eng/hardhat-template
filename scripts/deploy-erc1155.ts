import { ethers } from 'hardhat'

async function main() {
  const ADMIN_ADDRESS = '0x474f057fFd4184cE80236d39C88E8ECFe8589931'
  const ROLE_ADMIN = ethers.utils.formatBytes32String('ADMIN')

  const [deployer] = await ethers.getSigners()
  console.log(`DeployerAddress - ${deployer.address}`)

  // Main
  const MainContract = await ethers.getContractFactory('TukuruERC1155')
  const mainContract = await MainContract.deploy()
  await mainContract.deployed()
  console.log(`■ MainContract : ${mainContract.address}`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
