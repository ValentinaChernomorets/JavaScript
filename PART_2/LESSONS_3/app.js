let menu = new Menu([
    new MenuItem("/", "BRAND", '<i class="bi bi-command"></i>'),
    new MenuItem("tel:+373 76868688", "+373 76868688", '<i class="bi bi-telephone"></i>'),
    new MenuItem("/our-team", "Team", '<i class="bi bi-people"></i>'),
    new MenuItem("/our-contacts", "Contact US", '<i class="bi bi-geo-alt-fill"></i>'),
    new MenuItem("/our-services", "Services", '<i class="wrong-format"></i>'),
    new MenuItem("/our-works", "Our works"),
])
let headerTop = document.querySelector('.top')
headerTop.innerHTML = menu.render()
