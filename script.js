const borderContainer = document.querySelector("#border-radius-container")

const borderRadiusInputContainer = document.querySelector("#border-radius-input")

const borderTopLeft = document.querySelector("input[name=top-left]")
const borderTopRight = document.querySelector("input[name=top-right]")
const borderBottomRight = document.querySelector("input[name=bottom-right]")
const borderBottomLeft = document.querySelector("input[name=bottom-left]")

const resultBorderRadius = document.querySelector("#border-radius")

resultBorderRadius.innerText = getComputedStyle(borderContainer, null).getPropertyValue("border-radius")

borderRadiusInputContainer.addEventListener("keyup", function(e) {
    borderContainer.style.borderTopLeftRadius = borderTopLeft.value + "px"
    borderContainer.style.borderTopRightRadius = borderTopRight.value + "px"
    borderContainer.style.borderBottomRightRadius = borderBottomRight.value + "px"
    borderContainer.style.borderBottomLeftRadius = borderBottomLeft.value + "px"

    resultBorderRadius.innerText = borderContainer.style.borderRadius
})