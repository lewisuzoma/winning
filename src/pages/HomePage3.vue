<template>
  <div class="flex items-center justify-center min-h-screen relative p-4">
    <div id="spin_the_wheel">
      <canvas ref="wheelCanvas" id="wheel" width="800" height="800"></canvas>
      <div id="spin" @click="spin">{{ buttonText }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"

interface Sector {
  color: string
  text: string
  label: string
}

const sectors: Sector[] = [
  { color: "#FFBC03", text: "#333333", label: "Sweets" },
  { color: "#FF5A10", text: "#333333", label: "Prize draw" },
  { color: "#FFBC03", text: "#333333", label: "Sweets" },
  { color: "#FF5A10", text: "#333333", label: "Prize draw" },
  { color: "#FFBC03", text: "#333333", label: "Sweets + Prize draw" },
  { color: "#FF5A10", text: "#333333", label: "You lose" },
  { color: "#FFBC03", text: "#333333", label: "Prize draw" },
  { color: "#FF5A10", text: "#333333", label: "Sweets" }
]

const wheelCanvas = ref<HTMLCanvasElement | null>(null)
const buttonText = ref("SPIN")

// Physics
const rand = (m: number, M: number) => Math.random() * (M - m) + m
const tot = sectors.length
let ctx: CanvasRenderingContext2D
let dia: number, rad: number, arc: number
const PI = Math.PI
const TAU = 2 * PI

const friction = 0.991
let angVel = 0
let ang = 0
let spinButtonClicked = false

// Helper to get current sector
const getIndex = () => Math.floor(tot - (ang / TAU) * tot) % tot

function drawSector(sector: Sector, i: number) {
  const angle = arc * i
  ctx.save()

  // sector background
  ctx.beginPath()
  ctx.fillStyle = sector.color
  ctx.moveTo(rad, rad)
  ctx.arc(rad, rad, rad, angle, angle + arc)
  ctx.lineTo(rad, rad)
  ctx.fill()

  // text
  ctx.translate(rad, rad)
  ctx.rotate(angle + arc / 2)
  ctx.textAlign = "right"
  ctx.fillStyle = sector.text
  ctx.font = "bold 30px 'Lato', sans-serif"
  ctx.fillText(sector.label, rad - 10, 10)

  ctx.restore()
}

function rotate() {
  const sector = sectors[getIndex()]
  wheelCanvas.value!.style.transform = `rotate(${ang - PI / 2}rad)`
  buttonText.value = !angVel ? "SPIN" : sector.label
  const spinEl = document.getElementById("spin")!
  spinEl.style.background = sector.color
  spinEl.style.color = sector.text
}

function frame() {
  if (!angVel && spinButtonClicked) {
    const finalSector = sectors[getIndex()]
    console.log(`🎉 Woop! You won ${finalSector.label}`)
    spinButtonClicked = false
    return
  }
  angVel *= friction
  if (angVel < 0.002) angVel = 0
  ang += angVel
  ang %= TAU
  rotate()
}

function engine() {
  frame()
  requestAnimationFrame(engine)
}

function spin() {
  if (!angVel) angVel = rand(0.25, 0.45)
  spinButtonClicked = true
}

onMounted(() => {
  ctx = wheelCanvas.value!.getContext("2d") as CanvasRenderingContext2D
  dia = ctx.canvas.width
  rad = dia / 2
  arc = TAU / sectors.length

  // draw sectors
  sectors.forEach(drawSector)
  rotate()
  engine()
})
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");

#spin_the_wheel {
  display: inline-block;
  position: relative;
  overflow: hidden;
  
}

#wheel {
  display: block;
}

#spin {
  font: 1.5em/0 "Lato", sans-serif;
  user-select: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30%;
  height: 30%;
  margin: -15%;
  background: #fff;
  color: #fff;
  box-shadow: 0 0 0 8px currentColor, 0 0px 15px 5px rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  transition: 0.8s;
}

#spin::after {
  content: "";
  position: absolute;
  top: -17px;
  border: 10px solid transparent;
  border-bottom-color: currentColor;
  border-top: none;
}
</style>
