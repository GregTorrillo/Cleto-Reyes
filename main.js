const thirtyEight = document.querySelector('#thirtyEight')
const thirtyEightImg = document.querySelector('#thirtyEightImg')
const fortyFive = document.querySelector('#fortyFive')
const fortyFiveImg = document.querySelector('#fortyFiveImg')
const sixtyFive = document.querySelector('#sixtyFive')
const sixtyFiveImg = document.querySelector('#sixtyFiveImg')
const seventyFive = document.querySelector('#seventyFive')
const seventyFiveImg = document.querySelector('#seventyFiveImg')
const ninetyOne = document.querySelector('#ninetyOne')
const ninetyOneImg = document.querySelector('#ninetyOneImg')
const ninetyFour = document.querySelector('#ninetyFour')
const ninetyFourImg = document.querySelector('#ninetyFourImg')
const zeroEight = document.querySelector('#zeroEight')
const zeroEightImg = document.querySelector('#zeroEightImg')
const nineteen = document.querySelector('#nineteen')
const nineteenImg = document.querySelector('#nineteenImg')



document.querySelector('#thirtyEightNext').addEventListener('click', thirtyEightNext)
document.querySelector('#fortyFiveNext').addEventListener('click', fortyFiveNext)
document.querySelector('#sixtyFiveNext').addEventListener('click', sixtyFiveNext)
document.querySelector('#seventyFiveNext').addEventListener('click', seventyFiveNext)
document.querySelector('#ninetyOneNext').addEventListener('click', ninetyOneNext)
document.querySelector('#ninetyFourNext').addEventListener('click', ninetyFourNext)
document.querySelector('#zeroEightNext').addEventListener('click', zeroEightNext)
document.querySelector('#nineteenNext').addEventListener('click', nineteenNext)


function thirtyEightNext(){
  nineteen.classList.add('hidden')
	nineteenImg.classList.add('hidden')
  zeroEight.classList.add('hidden')
	zeroEightImg.classList.add('hidden')
  ninetyFour.classList.add('hidden')
	ninetyFourImg.classList.add('hidden')
  ninetyOne.classList.add('hidden')
	ninetyOneImg.classList.add('hidden')
  seventyFive.classList.add('hidden')
	seventyFiveImg.classList.add('hidden')
  sixtyFive.classList.add('hidden')
  sixtyFiveImg.classList.add('hidden')
  fortyFive.classList.add('hidden')
  fortyFiveImg.classList.add('hidden')
  thirtyEight.classList.toggle('hidden')
	thirtyEightImg.classList.toggle('hidden')
}
function fortyFiveNext(){
  nineteen.classList.add('hidden')
	nineteenImg.classList.add('hidden')
  zeroEight.classList.add('hidden')
	zeroEightImg.classList.add('hidden')
  ninetyFour.classList.add('hidden')
	ninetyFourImg.classList.add('hidden')
  ninetyOne.classList.add('hidden')
	ninetyOneImg.classList.add('hidden')
  seventyFive.classList.add('hidden')
	seventyFiveImg.classList.add('hidden')
  sixtyFive.classList.add('hidden')
  sixtyFiveImg.classList.add('hidden')
  thirtyEight.classList.add('hidden')
	thirtyEightImg.classList.add('hidden')
  fortyFive.classList.toggle('hidden')
	fortyFiveImg.classList.toggle('hidden')
}
function sixtyFiveNext(){
  nineteen.classList.add('hidden')
	nineteenImg.classList.add('hidden')
  zeroEight.classList.add('hidden')
	zeroEightImg.classList.add('hidden')
  ninetyFour.classList.add('hidden')
	ninetyFourImg.classList.add('hidden')
  ninetyOne.classList.add('hidden')
	ninetyOneImg.classList.add('hidden')
  seventyFive.classList.add('hidden')
	seventyFiveImg.classList.add('hidden')
  fortyFive.classList.add('hidden')
	fortyFiveImg.classList.add('hidden')
  thirtyEight.classList.add('hidden')
	thirtyEightImg.classList.add('hidden')
  sixtyFive.classList.toggle('hidden')
	sixtyFiveImg.classList.toggle('hidden')
}
function seventyFiveNext(){
  nineteen.classList.add('hidden')
	nineteenImg.classList.add('hidden')
  zeroEight.classList.add('hidden')
	zeroEightImg.classList.add('hidden')
  ninetyFour.classList.add('hidden')
	ninetyFourImg.classList.add('hidden')
  ninetyOne.classList.add('hidden')
	ninetyOneImg.classList.add('hidden')
  sixtyFive.classList.add('hidden')
	sixtyFiveImg.classList.add('hidden')
  fortyFive.classList.add('hidden')
	fortyFiveImg.classList.add('hidden')
  thirtyEight.classList.add('hidden')
	thirtyEightImg.classList.add('hidden')
  seventyFive.classList.toggle('hidden')
	seventyFiveImg.classList.toggle('hidden')
}
function ninetyOneNext(){
  nineteen.classList.add('hidden')
	nineteenImg.classList.add('hidden')
  zeroEight.classList.add('hidden')
	zeroEightImg.classList.add('hidden')
  ninetyFour.classList.add('hidden')
	ninetyFourImg.classList.add('hidden')
  seventyFive.classList.add('hidden')
	seventyFiveImg.classList.add('hidden')
  sixtyFive.classList.add('hidden')
	sixtyFiveImg.classList.add('hidden')
  fortyFive.classList.add('hidden')
	fortyFiveImg.classList.add('hidden')
  thirtyEight.classList.add('hidden')
	thirtyEightImg.classList.add('hidden')
  ninetyOne.classList.toggle('hidden')
	ninetyOneImg.classList.toggle('hidden')
}
function ninetyFourNext(){
  nineteen.classList.add('hidden')
	nineteenImg.classList.add('hidden')
  zeroEight.classList.add('hidden')
	zeroEightImg.classList.add('hidden')
  ninetyOne.classList.add('hidden')
  ninetyOneImg.classList.add('hidden')
  seventyFive.classList.add('hidden')
	seventyFiveImg.classList.add('hidden')
  sixtyFive.classList.add('hidden')
	sixtyFiveImg.classList.add('hidden')
  fortyFive.classList.add('hidden')
	fortyFiveImg.classList.add('hidden')
  thirtyEight.classList.add('hidden')
	thirtyEightImg.classList.add('hidden')
  ninetyFour.classList.toggle('hidden')
	ninetyFourImg.classList.toggle('hidden')
}
function zeroEightNext(){
  nineteen.classList.add('hidden')
	nineteenImg.classList.add('hidden')
  ninetyFour.classList.add('hidden')
	ninetyFourImg.classList.add('hidden')
  ninetyOne.classList.add('hidden')
  ninetyOneImg.classList.add('hidden')
  seventyFive.classList.add('hidden')
	seventyFiveImg.classList.add('hidden')
  sixtyFive.classList.add('hidden')
	sixtyFiveImg.classList.add('hidden')
  fortyFive.classList.add('hidden')
	fortyFiveImg.classList.add('hidden')
  thirtyEight.classList.add('hidden')
	thirtyEightImg.classList.add('hidden')
  zeroEight.classList.toggle('hidden')
	zeroEightImg.classList.toggle('hidden')
}
function nineteenNext(){
  zeroEight.classList.add('hidden')
	zeroEightImg.classList.add('hidden')
  ninetyFour.classList.add('hidden')
	ninetyFourImg.classList.add('hidden')
  ninetyOne.classList.add('hidden')
  ninetyOneImg.classList.add('hidden')
  seventyFive.classList.add('hidden')
	seventyFiveImg.classList.add('hidden')
  sixtyFive.classList.add('hidden')
	sixtyFiveImg.classList.add('hidden')
  fortyFive.classList.add('hidden')
	fortyFiveImg.classList.add('hidden')
  thirtyEight.classList.add('hidden')
	thirtyEightImg.classList.add('hidden')
  nineteen.classList.toggle('hidden')
	nineteenImg.classList.toggle('hidden')
}
