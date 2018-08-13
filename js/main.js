const setup = () => {
  console.log('test');

  /* Smooth scrolling proof of concept | NEEDS REFACTORING */
  var link = document.getElementsByClassName('nav-link')[2];
  console.log(link);
  var dest = document.getElementById('portfolio');
          
  link.addEventListener('click', e => {
    e.preventDefault();
    dest.scrollIntoView({
      behavior: 'smooth'
    });
  });   
}

window.addEventListener('load', setup);