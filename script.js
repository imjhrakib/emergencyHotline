const callHistory = []
// heart icon
const hearts = document.getElementsByClassName("heart-icon")
for (const heart of hearts) {
  heart.addEventListener("click", function () {
    let count = parseInt(document.getElementById("remainingHeart").innerText)
    document.getElementById("remainingHeart").innerText = ++count
  })
}

// call button
const callBtns = document.getElementsByClassName("callBtn")

for (let i = 0; i < callBtns.length; i++) {
  callBtns[i].addEventListener("click", function () {
    let count = parseInt(document.getElementById("remainingCoin").innerText)
    if (count < 20) {
      alert(" You don’t have enough coins. It will cost 20 coins to make the call.")
      return
    }
    count -= 20

    document.getElementById("remainingCoin").innerText = count
    const serviceName = document.getElementsByClassName("serviceName")[i].innerText
    const serviceNumber = document.getElementsByClassName("serviceNumber")[i].innerText
    alert("📞" + " Calling " + serviceName + " " + serviceNumber + "...")

    const callHistoryObj = {
      name: serviceName,
      number: serviceNumber,
      time: new Date().toLocaleTimeString()
    }
    callHistory.push(callHistoryObj)

    const callHistoryContainers = document.getElementById("callHistoryContainer")
    callHistoryContainers.innerHTML = ""
    for (const data of callHistory) {
      const div = document.createElement("div")
      div.innerHTML = `          
            <div class="bg-[#FAFAFA] flex justify-between items-center gap-1.5 p-2 rounded-lg">
              <div class="w-2/3">
                <p class="text-[#111111] font-bold">${data.name}</p>
                <h5 class="text-[#5C5C5C]">${data.number}</h5>
              </div>
              <p class="text-[#111111] w-1/3">${data.time}</p>
            </div>          
    `
      callHistoryContainers.appendChild(div)
    }


  })
}

// clear history button
document.getElementById("clearHistoryBtn").addEventListener("click",function(){
  document.getElementById("callHistoryContainer").innerHTML = ""
})

// copy button functionalities

const copyBtns = document.getElementsByClassName("copyBtn")

for(let i=0; i<copyBtns.length; i++){
  copyBtns[i].addEventListener("click",function(){
  let copyCount = parseInt(document.getElementById("copyCount").innerText)
  
  document.getElementById("copyCount").innerText = ++copyCount
  
  let number = document.getElementsByClassName("serviceNumber")[i].innerText
  navigator.clipboard.writeText(number).then(()=>{
    
  })
})
}