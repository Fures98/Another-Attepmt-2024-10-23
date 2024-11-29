let a = document.querySelector("#images").getElementsByTagName("img")
let next = document.querySelector("[data-next]")
let prev = document.querySelector("[data-prev]")
let i = 0
a[i].style = "display: block;"
next.addEventListener("click" , () => {
	a[i].style = "display: none;"
	i++
	if(i == a.length){
		i = 0
	}
	a[i].style.display = "block"
})
prev.addEventListener("click" , () => {
	a[i].style = "display: none;"
	i--
	if(i == -1){
		i = a.length - 1
	}
	a[i].style.display = "block"
})
setInterval(() => {
	a[i].style = "display: none;"
	i++
	if(i == a.length){
		i = 0
	}
	a[i].style = "display: block;"
} , 5000)
