export default () => {

    // mobile menu
    $('.burger').on('click', () => {
        $('.header').addClass('active');
    });

    $('.header__close').on('click', () => {
        $('.header').removeClass('active');
    });

}