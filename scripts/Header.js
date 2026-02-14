class Header {
    selectors = {
        root: '[data-js-header]',
        overlay: '[data-js-header-overlay]',
        socialNetwork: '[data-js-header-social-networks]',
        burgerButton: '[data-js-header-burger-button]',
        eightStar:'[data-js-eight-star]'
    }

    stateClasses = {
        isActive: 'is-active',
        isLock: 'is-lock',
        isHide: 'is-hide',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root);
        this.overlayElement = this.rootElement.querySelector(this.selectors.overlay);
        this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton);
        this.socialNetworkElement = this.rootElement.querySelector(this.selectors.socialNetwork);
        this.Adress = this.rootElement.querySelector(this.selectors.Adress);
        this.eightStar = this.rootElement.querySelector(this.selectors.eightStar);
        this.bindEvents();
    }

    onBurgerButtonClick = () => {
        this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
        this.overlayElement.classList.toggle(this.stateClasses.isActive);
        document.documentElement.classList.toggle(this.stateClasses.isActive);
        this.socialNetworkElement.classList.toggle( this.stateClasses.isHide);
        this.eightStar.classList.toggle( this.stateClasses.isHide);
    }

    bindEvents() {
        this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick);
    }
}

export default Header;