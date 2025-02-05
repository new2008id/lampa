(function () {
    console.log('Плагин загружен!');
  console.log('Lampa.Menu:', Lampa.Menu);

  const menuItems = [
    {
      id: 'my-custom-menu-item',
      title: 'Мой пункт меню',
      icon: 'star',
      onClick: () => {
        alert('Вы нажали на мой пункт меню!');
      }
    }
  ];

  Lampa.Menu.init(menuItems); // Инициализируем меню с нашими пунктами
  Lampa.Menu.render(); // Отображаем меню (возможно, это необходимо)
})();
