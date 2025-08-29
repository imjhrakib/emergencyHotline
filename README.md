1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
  i. getElementById
      - select specific element by IdName
      - returns single element
      - Ex-
          let idElement = document.getElementById("idName")
  ii. getElementByClassName
      - select multiple element by className
      - returns htmlCollecttion
      - we can loop over it
      - Ex-
          const data = document.getElementByClassName("className")
  iii. querySelector
      - select a first elements that match a css selector
      - returns single element
      - Ex- 
          let firstItm = document.querySelector("nameOfAnyElement")
  iv. querySelectorAll
      - select all elements that match a css selector
      - returns nodeList
      - we can use forEach loop to it
      - Ex-
          let allItems = document.querySelectorAll("nameOfAnyElement")

2. Create and insert a new element into the DOM-
  .Create
    - using document.createElement("tagName") function
    - Ex - 
        const div = document.createElement("div")
        div.innerHTML = `
          <!-- content -->
        `
  .Insert
    - using appendChild() function
    - Ex - 
        const containerName = document.getElementById("idName")
        let newDiv = document.createElement("div")
        newDiv.innerHTML = "We can keep any element here"
        containerName.appendChild(newDiv)