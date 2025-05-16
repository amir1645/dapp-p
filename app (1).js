
let contractAddress = "0x5Bf4F9E5B09B8bE4078fcC4Ca778A5Cb51E67035";
let contractAbi = [...]; // برای جایگذاری ABI کامل

async function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      alert("Connected: " + accounts[0]);
    } catch (err) {
      console.error("User rejected request");
    }
  } else {
    alert("Please install MetaMask!");
  }
}
