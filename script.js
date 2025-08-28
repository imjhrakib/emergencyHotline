const hearts = document.getElementsByClassName("heart-icon")

for (const heart of hearts) {
  heart.addEventListener("click", function () {
    const count = parseInt(document.getElementById("remainingHeart").innerText)
    count++
    document.getElementById("remainingHeart").innerText = count
    console.log(count)

  })
}