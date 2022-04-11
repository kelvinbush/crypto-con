const headerNav = document.getElementById('header');
headerNav.innerHTML = `
<div class="nav__container">
            <a class="nav__logo" href="#home"><img src="img/menu.svg" alt="Website Logo"></a>
            <nav>
                <img id="toggle-nav" src="img/burger-bar.png" alt="Toggle Menu">
                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__links">
                        <li><a href="#home" class="nav__link">Home</a></li>
                        <li><a href="#prgm" class="nav__link">About</a></li>
                        <li><a href="#spks" class="nav__link">Speakers</a></li>
                    </ul>
                    <img id="close-nav" src="img/close.png" alt="Close Navigation">
                </div>
            </nav>
      </div>
`;
