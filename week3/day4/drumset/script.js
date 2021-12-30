let body = document.body
let boom = document.getElementById('boom')
let a = document.getElementById('a')
let s = document.getElementById('s')
let d = document.getElementById('d')
let f = document.getElementById('f')
let g = document.getElementById('g')
let h = document.getElementById('h')
let j = document.getElementById('j')
let k = document.getElementById('k')
let i = document.getElementById('i')

a.addEventListener(`click`, playSound)
s.addEventListener(`click`, playSound)
d.addEventListener(`click`, playSound)
f.addEventListener(`click`, playSound)
g.addEventListener(`click`, playSound)
h.addEventListener(`click`, playSound)
j.addEventListener(`click`, playSound)
k.addEventListener(`click`, playSound)
l.addEventListener(`click`, playSound)
body.addEventListener(`keydown`, playSound)

function playSound(e) {
	console.log(e.target)
	if (e.code === 'KeyA' || e.target.parentElement === a) {
		boom.play()			
	} else if (e.code === 'KeyS' || e.target.parentElement === s) {
		clap.play()			
	} else if (e.code === 'KeyD' || e.target.parentElement === d) {
		hihat.play()			
	} else if (e.code === 'KeyF' || e.target.parentElement === f) {
		kick.play()			
	} else if (e.code === 'KeyG' || e.target.parentElement === g) {
		openhat.play()			
	} else if (e.code === 'KeyH' || e.target.parentElement === h) {
		ride.play()			
	} else if (e.code === 'KeyJ' || e.target.parentElement === j) {
		snare.play()			
	} else if (e.code === 'KeyK' || e.target.parentElement === k) {
		tink.play()			
	} else if (e.code === 'KeyL' || e.target.parentElement === l) {
		tom.play()			
	}
}