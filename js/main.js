const setup = () => {
  smoothScrolling();
}

const smoothScrolling = () => {
  let aboutLink = document.getElementsByClassName('nav-link')[1];  
  let projectsLink = document.getElementsByClassName('nav-link')[2];
  let about = document.querySelector('#main #about');
  let portfolio = document.querySelector('#portfolio h2');
          
  aboutLink.addEventListener('click', e => {
    e.preventDefault();
    about.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });

  projectsLink.addEventListener('click', e => {
    e.preventDefault();
    portfolio.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

window.addEventListener('load', setup);