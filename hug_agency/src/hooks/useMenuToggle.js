import { useEffect } from 'react';

const useMenuToggle = () => {
  useEffect(() => {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
    const closeMenu = document.createElement('div');
    closeMenu.classList.add('close-menu');
    closeMenu.innerHTML = '&times;';
    menu.appendChild(closeMenu);

    if (menuIcon) {
      menuIcon.addEventListener('click', () => {
        menu.classList.toggle('show');
      });

      closeMenu.addEventListener('click', () => {
        menu.classList.remove('show');
      });
    }
  }, []);
};

export default useMenuToggle;
