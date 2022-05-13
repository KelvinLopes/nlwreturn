window.addEventListener('scroll', onScroll)

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activatdMenuAtCurrentOnSection(home)
  activatdMenuAtCurrentOnSection(services)
  activatdMenuAtCurrentOnSection(about)
}

function activatdMenuAtCurrentOnSection(section) {
  const targetLine = scrollY + innerHeight / 2

  //Verifica se a seção passou da linha

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  //Verifica se a base está abaixo da linha alvo

  const sectionEndAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndAt <= targetLine

  //Limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content
  `)
