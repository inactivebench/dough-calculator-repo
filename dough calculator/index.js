// modal variables
const openModalButtons = document.getElementById("open")
const closeModalButtons = document.getElementById("close")
const overlay = document.getElementById("overlay")

// reset
const reset = document.getElementById("reset")

// ingredient variables
let paragraph = document.getElementById("w-h")
let flourGrams = document.getElementById("flour-grams")
let flourVolume = document.getElementById("flour-volume")

let waterGrams = document.getElementById("water-grams")
let waterPercent = document.getElementById("water-percent")
let waterVolume = document.getElementById("water-volume")

let saltGrams = document.getElementById("salt-grams")
let saltPercent = document.getElementById("salt-percent")
let saltVolume = document.getElementById("salt-volume")

let milkGrams = document.getElementById("milk-grams")
let milkPercent = document.getElementById("milk-percent")
let milkVolume = document.getElementById("milk-volume")

let yeastGrams = document.getElementById("yeast-grams")
let yeastPercent = document.getElementById("yeast-percent")
let yeastVolume = document.getElementById("yeast-volume")

let leavenGrams = document.getElementById("leaven-grams")
let leavenPercent = document.getElementById("leaven-percent")
let leavenVolume = document.getElementById("leaven-volume")

let poolishGrams = document.getElementById("poolish-grams")
let poolishPercent = document.getElementById("poolish-percent")
let poolishVolume = document.getElementById("poolish-volume")

let starterGrams = document.getElementById("starter-grams")
let starterPercent = document.getElementById("starter-percent")
let starterVolume = document.getElementById("starter-volume")

let oilGrams = document.getElementById("oil-grams")
let oilPercent = document.getElementById("oil-percent")
let oilVolume = document.getElementById("oil-volume")

let sugarGrams = document.getElementById("sugar-grams")
let sugarPercent = document.getElementById("sugar-percent")
let sugarVolume = document.getElementById("sugar-volume")

let butterGrams = document.getElementById("butter-grams")
let butterPercent = document.getElementById("butter-percent")
let butterVolume = document.getElementById("butter-volume")

let eggsGrams = document.getElementById("eggs-grams")
let eggsPercent = document.getElementById("eggs-percent")
let eggsVolume = document.getElementById("eggs-volume")

let honeyGrams = document.getElementById("honey-grams")
let honeyPercent = document.getElementById("honey-percent")
let honeyVolume = document.getElementById("honey-volume")

let bakingpowderGrams = document.getElementById("bakingpowder-grams")
let bakingpowderPercent = document.getElementById("bakingpowder-percent")
let bakingpowderVolume = document.getElementById("bakingpowder-volume")

 flourGrams.addEventListener("change", function() {
 	flourVolume.textContent = `${Math.round(flourGrams.value/125)} cups`

 	waterGrams.value = flourGrams.value * waterPercent.value/100
 	saltGrams.value = flourGrams.value * saltPercent.value/100
 	milkGrams.value = flourGrams.value * milkPercent.value/100
 	yeastGrams.value = flourGrams.value * yeastPercent.value/100
 	leavenGrams.value = flourGrams.value * leavenPercent.value/100
 	poolishGrams.value = flourGrams.value * poolishPercent.value/100
 	starterGrams.value = flourGrams.value * starterPercent.value/100
 	oilGrams.value = flourGrams.value * oilPercent.value/100
 	sugarGrams.value = flourGrams.value * sugarPercent.value/100
 	butterGrams.value = flourGrams.value * butterPercent.value/100
 	eggsGrams.value = flourGrams.value * eggsPercent.value/100
 	honeyGrams.value = flourGrams.value * honeyPercent.value/100
 	bakingpowderGrams.value = flourGrams.value * bakingpowderPercent.value/100

 	sum()
 })

// Water values
 waterPercent.addEventListener("change", function() {
 	let water = flourGrams.value * waterPercent.value/100
 	let volume = (water/236.59).toFixed(2)
 	waterGrams.value =  water
 	waterVolume.textContent = `${volume} cups`
 	sum()
 })
 waterGrams.addEventListener("change", function() {
 	waterPercent.value = Math.floor((waterGrams.value * 100)/ flourGrams.value)
 	waterVolume.textContent = `${(waterGrams.value/236.59).toFixed(2)} cups`
 	sum()
 })

//salt values
 saltPercent.addEventListener("change", function() {
 	let salt = flourGrams.value * saltPercent.value/100
 	let volume = (salt/5).toFixed(2)
 	saltGrams.value =  salt
 	saltVolume.textContent = `${volume} tsp`
 	sum()
 })
 saltGrams.addEventListener("change", function() {
 	saltPercent.value = Math.floor((saltGrams.value * 100)/ flourGrams.value)
 	saltVolume.textContent = `${(saltGrams.value/236.59).toFixed(2)} tsp`
 	sum()
 })

 //milk values
 milkPercent.addEventListener("change", function() {
 	let milk = flourGrams.value * milkPercent.value/100
 	let volume = (milk/243.69).toFixed(2)
 	milkGrams.value =  milk
 	milkVolume.textContent = `${volume} cups`
 	sum()
 })
 milkGrams.addEventListener("change", function() {
 	milkPercent.value = Math.floor((milkGrams.value * 100)/ flourGrams.value)
 	milkVolume.textContent = `${(milkGrams.value/236.59).toFixed(2)} cups`
 	sum()
 })

 //yeast values
 yeastPercent.addEventListener("change", function() {
 	let yeast = flourGrams.value * yeastPercent.value/100
 	let volume = (yeast/3.5).toFixed(2)
 	yeastGrams.value =  yeast
 	yeastVolume.textContent = `${volume} tsp`
 	sum()
 })
 yeastGrams.addEventListener("change", function() {
 	yeastPercent.value = Math.floor((yeastGrams.value * 100)/ flourGrams.value)
 	yeastVolume.textContent = `${(yeastGrams.value/236.59).toFixed(2)} tsp`
 	sum()
 })

//leaven values
 leavenPercent.addEventListener("change", function() {
 	let leaven = flourGrams.value * leavenPercent.value/100
 	let volume = (leaven/200).toFixed(2)
 	leavenGrams.value =  leaven
 	leavenVolume.textContent = `${volume} cups`
 	sum()
 })
 leavenGrams.addEventListener("change", function() {
 	leavenPercent.value = Math.floor((leavenGrams.value * 100)/ flourGrams.value)
 	leavenVolume.textContent = `${(leavenGrams.value/236.59).toFixed(2)} cups`
 	sum()
 })

 //poolish values
 poolishPercent.addEventListener("change", function() {
 	let poolish = flourGrams.value * poolishPercent.value/100
 	let volume = (poolish/200).toFixed(2)
 	poolishGrams.value =  poolish
 	poolishVolume.textContent = `${volume} cups`
 	sum()
 })
 poolishGrams.addEventListener("change", function() {
 	poolishPercent.value = Math.floor((poolishGrams.value * 100)/ flourGrams.value)
 	poolishVolume.textContent = `${(poolishGrams.value/236.59).toFixed(2)} cups`
 	sum()
 })

 //starter values
 starterPercent.addEventListener("change", function() {
 	let starter = flourGrams.value * starterPercent.value/100
 	let volume = (starter/50).toFixed(2)
 	starterGrams.value =  starter
 	starterVolume.textContent = `${volume} Tbsp`
 	sum()
 })
 starterGrams.addEventListener("change", function() {
 	starterPercent.value = Math.floor((starterGrams.value * 100)/ flourGrams.value)
 	starterVolume.textContent = `${(starterGrams.value/236.59).toFixed(2)} Tbsp`
 	sum()
 })

 //oil values
 oilPercent.addEventListener("change", function() {
 	let oil = flourGrams.value * oilPercent.value/100
 	let volume = (oil/13.73).toFixed(2)
 	oilGrams.value =  oil
 	oilVolume.textContent = `${volume} Tbsp`
 	sum()
 })
 oilGrams.addEventListener("change", function() {
 	oilPercent.value = Math.floor((oilGrams.value * 100)/ flourGrams.value)
 	oilVolume.textContent = `${(oilGrams.value/236.59).toFixed(2)} Tbsp`
	sum() 
 })

 //sugar values
 sugarPercent.addEventListener("change", function() {
 	let sugar = flourGrams.value * sugarPercent.value/100
 	let volume = (sugar/200).toFixed(2)
 	sugarGrams.value =  sugar
 	sugarVolume.textContent = `${volume} cups`
 	sum()
 })
 sugarGrams.addEventListener("change", function() {
 	sugarPercent.value = Math.floor((sugarGrams.value * 100)/ flourGrams.value)
 	sugarVolume.textContent = `${(sugarGrams.value/236.59).toFixed(2)} cups`
 	sum()
 })

 //butter values
 butterPercent.addEventListener("change", function() {
 	let butter = flourGrams.value * butterPercent.value/100
 	let volume = (butter/227).toFixed(2)
 	butterGrams.value =  butter
 	butterVolume.textContent = `${volume} cups`
 	sum()
 })
 butterGrams.addEventListener("change", function() {
 	butterPercent.value = Math.floor((butterGrams.value * 100)/ flourGrams.value)
 	butterVolume.textContent = `${(butterGrams.value/236.59).toFixed(2)} cups`
 	sum()
 })

 //eggs values
 eggsPercent.addEventListener("change", function() {
 	let eggs = flourGrams.value * eggsPercent.value/100
 	let volume = (eggs/50).toFixed(2)
 	eggsGrams.value =  eggs
 	eggsVolume.textContent = `${volume} large eggs`
 	sum()
 })
 eggsGrams.addEventListener("change", function() {
 	eggsPercent.value = Math.floor((eggsGrams.value * 100)/ flourGrams.value)
 	eggsVolume.textContent = `${(eggsGrams.value/236.59).toFixed(2)} large eggs`
 	sum()
 })

 //honey values
 honeyPercent.addEventListener("change", function() {
 	let honey = flourGrams.value * honeyPercent.value/100
 	let volume = (honey/340).toFixed(2)
 	honeyGrams.value =  honey
 	honeyVolume.textContent = `${volume} cups`
 	sum()
 })
 honeyGrams.addEventListener("change", function() {
 	honeyPercent.value = Math.floor((honeyGrams.value * 100)/ flourGrams.value)
 	honeyVolume.textContent = `${(honeyGrams.value/236.59).toFixed(2)} cups`
 	sum()
 })

//Baking Powder values
 bakingpowderPercent.addEventListener("change", function() {
 	let bakingPowder = flourGrams.value * bakingpowderPercent.value/100
 	let volume = (bakingPowder/4).toFixed(2)
 	bakingpowderGrams.value =  bakingPowder
 	bakingpowderVolume.textContent = `${volume} tsp`
 	sum()
 })
 bakingpowderGrams.addEventListener("change", function() {
 	bakingpowderPercent.value = Math.floor((bakingpowderGrams.value * 100)/ flourGrams.value)
 	bakingpowderVolume.textContent = `${(bakingpowderGrams.value/236.59).toFixed(2)} tsp`
 	sum()
 })

 // functions to open modal
 openModalButtons.addEventListener("click", () => {
 	const modals = document.querySelectorAll(".modal")
 	modals.forEach(modal => {
 		openModal(modal)
 	})
 })

 overlay.addEventListener("click", () => {
 	const modals = document.querySelectorAll(".modal.active")
 	modals.forEach(modal => {
 		closeModal(modal)
 	})
 })

 closeModalButtons.addEventListener("click", () => {
 	const modals = document.querySelectorAll(".modal.active")
 	modals.forEach(modal => {
 		closeModal(modal)
 	})
 })

 function openModal(modal) {
 	if(modal == null) return
 	modal.classList.add("active")
 	overlay.classList.add("active")
 }

 function closeModal(modal) {
 	if(modal == null) return
 	modal.classList.remove("active")
 	overlay.classList.remove("active")

 }
 
 // checkbox hide/show div

 let inputGroups = document.getElementsByClassName("input-group")
 let checkboxes = document.getElementsByClassName("checkbox")

 // convert elements into an array
   inputGroups = Array.from(inputGroups)
   checkboxes = Array.from(checkboxes)

 // elements that are not checked do not show when page is loaded
   checkboxes.forEach(function(checkbox, index) {
   		if(checkbox.checked == false){
   		inputGroups[index].style.display = "none"
   	}else {
   		inputGroups[index].style.display = "block"
   	  }
   	})

 // show input when checked and viceversa
	checkboxes.forEach(function(checkbox, index) {
   	checkbox.addEventListener("click", function() {
   		if(checkbox.checked == false){
   		inputGroups[index].style.display = "none"
   	}else {
   		inputGroups[index].style.display = "block"
   	  }
   	})
   })

 // adds and displays the total dough weight and hydration
	function sum(){
		doughWeight = parseFloat(flourGrams.value) + parseFloat(waterGrams.value) + parseFloat(saltGrams.value) + parseFloat(milkGrams.value) + parseFloat(yeastGrams.value) + parseFloat(leavenGrams.value) + parseFloat(poolishGrams.value) + parseFloat(starterGrams.value) + parseFloat(oilGrams.value) + parseFloat(sugarGrams.value) + parseFloat(butterGrams.value) + parseFloat(eggsGrams.value) + parseFloat(honeyGrams.value) + parseFloat(bakingpowderGrams.value)
  hydration = ((parseFloat(waterGrams.value) + parseFloat(milkGrams.value)) * 100) / parseFloat(flourGrams.value)

  paragraph.textContent = `Your total dough weight is ${doughWeight}g and hydration is ${hydration}%`
	}
  sum()

 // resets all input values to 0 
  reset.addEventListener("click", function() {
  	let weightInput = document.getElementsByClassName("weight")
  	let percentageInput = document.getElementsByClassName("percentage")

  	weightInput = Array.from(weightInput)
  	percentageInput = Array.from(percentageInput)

  	weightInput.forEach(function(weightInput, index) {
  		weightInput.value = 0
  	})
  	percentageInput.forEach(function(percentageInput, index) {
  		percentageInput.value = 0
  	})
  	sum()
  })
