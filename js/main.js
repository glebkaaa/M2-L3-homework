const dialogBox = document.querySelector('.wrapper__box')
const closeBtn = document.querySelector('.wrapper__close')
const agreeBtn = document.querySelector('.wrapper__box-agree')
const cancelBtn = document.querySelector('.wrapper__box-cancel')
const dialogTitle = document.querySelector('.wrapper__box-title')
const closeBtnSpan = document.querySelector('.wrapper__close-span')
let isClosed = false

const closeFunc = () => {
	if (isClosed) {
		dialogBox.style.display = 'block'
		document.body.removeAttribute('close')
		dialogTitle.innerHTML = 'Будешь сидеть меньше в соц.сетях, после прочтения?'
		isClosed = false
	} else {
		document.body.setAttribute('close', '')
		dialogBox.style.display = 'none'
		dialogTitle.innerHTML = 'Будешь сидеть меньше в соц.сетях, после прочтения?'
		isClosed = true
	}
}

agreeBtn.addEventListener('click', function () {
	dialogTitle.innerHTML = 'Красавчик! Так держать!'
})
cancelBtn.addEventListener('click', function () {
	dialogTitle.innerHTML = 'Жаль, что я не смог тебе помочь O_O'
})
closeBtn.addEventListener('click', closeFunc)
