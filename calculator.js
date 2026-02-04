let a = document.getElementById("7")
let b = document.getElementById("8")
let c = document.getElementById("9")
let d = document.getElementById("x")
let e = document.getElementById("4")
let f = document.getElementById("5")
let g = document.getElementById("text")
let h = document.getElementById("minus")
let i = document.getElementById("equal")
let j = document.getElementById("3")
let k = document.getElementById("2")
let l = document.getElementById("1")
let m = document.getElementById("6")
let n = document.getElementById("plus")
let o = document.getElementById("divide")
let s = document.getElementById("clear")
let t = document.getElementById("modulo")
let u = document.getElementById("dot")
let z = document.getElementById("0")

// let inputvalue="";
a.addEventListener("click", function () {
  g.value += a.value
})

o.addEventListener("click", function () {
  g.value += o.value
})
h.addEventListener("click", function () {
  g.value += h.value
})

n.addEventListener("click", function () {
  g.value += n.value
})

c.addEventListener("click", function () {
  g.value += c.value
})
b.addEventListener("click", function () {
  g.value += b.value
})

d.addEventListener("click", function () {
  g.value += d.value

})
e.addEventListener("click", function () {
  g.value += e.value

})
f.addEventListener("click", function () {
  g.value += f.value

})

t.addEventListener("click", function () {
  g.value += t.value
})


i.addEventListener("click", function () {
  document.getElementById("text");

  if (g.value !== "") {
    g.value = eval((text.value));
  }

})

j.addEventListener("click", function () {
  g.value += j.value
})

l.addEventListener("click", function () {
  g.value += l.value
})

m.addEventListener("click", function () {
  g.value += m.value


})

s.addEventListener("click", function () {
  g.value = "";
})

u.addEventListener("click", function () {
  g.value+=u.value
})

k.addEventListener("click", function () {
  g.value+=k.value
})

z.addEventListener("click", function () {
  g.value+=z.value
})



















































































