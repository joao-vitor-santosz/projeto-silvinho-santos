// ===== MENU HAMBURGUER =====
const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav-container')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-open')
    nav.classList.toggle('is-open')
    document.body.classList.toggle('menu-open')
})

// ===== NAVEGAÇÃO ENTRE SEÇÕES =====
const menuLinks = document.querySelectorAll('[data-section]')

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()

        const sectionId = link.dataset.section

        // Remove is-active de todos os links
        menuLinks.forEach(l => l.classList.remove('is-active'))

        // Adiciona is-active no link clicado
        link.classList.add('is-active')

        // Remove is-active de todas as seções
        document.querySelectorAll('.home, .discography, .projects, .interviews, .parodies')
            .forEach(section => section.classList.remove('is-active'))

        // Adiciona is-active na seção correta
        document.getElementById(sectionId).classList.add('is-active')

        // Fecha o menu hamburguer se estiver aberto
        hamburger.classList.remove('is-open')
        nav.classList.remove('is-open')
        document.body.classList.remove('menu-open')

        // Volta para o topo da página
        window.scrollTo({ top: 0, behavior: 'smooth' })
    })
})

// ===== ANIMAÇÃO DA SEÇÃO ABOUT AO ENTRAR NA TELA =====
const aboutSection = document.querySelector('#about')

if (aboutSection) {
    const aboutObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate')
                observer.unobserve(entry.target)
            }
        })
    }, {
        threshold: 0.2
    })

    aboutObserver.observe(aboutSection)
}

// ===== ANIMAÇÃO DA SEÇÃO DISCOGRAPHY AO ENTRAR NA TELA =====
const discographyTitle = document.querySelector('.discography .title')
const discographyAlbums = document.querySelectorAll('.discography .albums-list .album')

if (discographyTitle || discographyAlbums.length) {
    const discographyObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible')
                observer.unobserve(entry.target)
            }
        })
    }, {
        threshold: 0.2
    })

    if (discographyTitle) {
        discographyObserver.observe(discographyTitle)
    }

    discographyAlbums.forEach(album => discographyObserver.observe(album))
}
