(() => {
  const mobileMenu1 = document.querySelector('.menu-box');
  const openMenuBtn1 = document.querySelector('.open-menu');
  const closeMenuBtn1 = openMenuBtn1;
  
   const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn1.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn1.setAttribute('aria-expanded', !isMenuOpen);
      openMenuBtn1.classList.toggle('is-toggle');
      mobileMenu1.classList.toggle('is-open');
    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };
  
  openMenuBtn1.addEventListener('click', toggleMenu);
  closeMenuBtn1.addEventListener('focusout', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    openMenuBtn1.classList.remove('is-toggle');
    mobileMenu1.classList.remove('is-open');
    openMenuBtn1.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });

  
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
