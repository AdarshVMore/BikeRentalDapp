import { ethers } from "ethers";

// import { ethers } from "https://cdn.ethers.io/lib/ethers-5.2.esm.min.js";

console.log("done!");

let fname, lname, credit, due, welcome;

function gotname() {
  fname = document.getElementById("fname").value;
  lname = document.getElementById("lname").value;
  console.log(`${fname} , ${lname}`);
  document.getElementById("heading2").innerHTML = `Welcome ${fname} !`;
  return fname, lname, welcome;
}

function creditAcc() {
  credit = document.getElementById("credit-acc").value;
  console.log(credit);
  return credit;
}

function payDue() {
  due = document.getElementById("due-acc").value;
  console.log(due);
  return due;
}

async function main() {
  const BikeChainFactory = await ethers.getContractFactory("BikeChain");
  console.log("deploying bikechain...");
  const bikeChain = await BikeChainFactory.deploy();
  await bikeChain.deployed();
  console.log(`deployed contract to : ${bikeChain.address}`);
  bikeChain.getname(fname, lname);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
