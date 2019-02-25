/****************************** DON'T ALTER ******************************/
function fadeOut(el) {
  el.classList.add("fade-up-out")
  setTimeout(() => {
    el.style.opacity = 0
    el.classList.remove("fade-up-out")
    el.style.pointerEvents = "none"
  }, FADEDURATION)
}

function fadeIn(el) {
  el.classList.add("fade-down-in")
  setTimeout(() => {
    el.style.opacity = 1
    el.classList.remove("fade-down-in")
    el.style.pointerEvents = "auto"
  }, FADEDURATION)
}

function transitionPage(el, groupOut, groupIn) {
  fadeAllOut(el, groupOut)
  setTimeout(() => {
    fadeAllIn(groupIn)
  }, LONGESTPOSSIBLE)
}
/*************************************************************************/

function delayedFadeOut(div, range) {
  // Your solution here
  setTimeout(() => {
    fadeOut(div)
  }, range)
  // fadeOut(div)
}

function delayedFadeIn(div, range) {
  // Your solution here
  fadeIn(div)
}

function fadeAllOut(el, group) {
  // Your solution here
  let length = group.length
  let increase = 100
  group.forEach(div => {
    if (div == el) {
      delayedFadeOut(el, LONGRANGE)
    }
    else {
      increase += 200
      delayedFadeOut(div, (LONGRANGE + increase))
    }
  })
}

function fadeAllIn(group) {
  // Your solution here
  group.forEach(div => {
    delayedFadeIn(div)
  })
}
