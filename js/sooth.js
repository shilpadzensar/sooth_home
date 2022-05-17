const hide = () => {
    let hamburger = document.getElementById('hamburger');
    let header_wrapper = document.getElementById('header-wrapper');

    if (hamburger.getAttribute("data-state") == 'show') {
        
        hamburger.setAttribute("data-state", 'hide')
        hamburger.classList.add("fa-times");
        hamburger.classList.remove("fa-bars");

        header_wrapper.classList.remove('bg-color');

        document.getElementsByClassName('logo')[0].style.display = 'none';

        document.getElementsByClassName('nav-links')[0].style.display = 'block';
        document.getElementsByClassName('page-links')[0].style.display = 'block';

    } else {

        hamburger.setAttribute("data-state", 'show');
        hamburger.classList.add("fa-bars");
        hamburger.classList.remove("fa-times");

        header_wrapper.classList.add('bg-color');

        document.getElementsByClassName('logo')[0].style.display = 'block';

        document.getElementsByClassName('nav-links')[0].style.display = 'none';
        document.getElementsByClassName('page-links')[0].style.display = 'none';
    }

};


