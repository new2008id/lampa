(function () {
    console.log('Плагин "Добавить пункт в меню" загружен!');
    console.log('Lampa.Menu:', Lampa.Menu);
    Lampa.Menu.add({
        id: 'my-custom-menu-item', // Уникальный идентификатор пункта меню
        title: 'Мой пункт меню',  // Текст, отображаемый в меню
        icon: 'star',  // Иконка (используйте иконки Lampa или Font Awesome)
        onClick: () => {
            // Код, который будет выполнен при нажатии на пункт меню
            alert('Вы нажали на мой пункт меню!');
        }
    });
})();
