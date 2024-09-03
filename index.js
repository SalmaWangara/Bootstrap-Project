const searchBtn = document.querySelector('#search');

searchBtn.addEventListener('keyup', (e) => {
  let arr = document.querySelector('#hero').children;
  console.log(arr);
});

const formInputs = document.querySelector('#formInputs');

formInputs.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.querySelector('#name');
  const phone = document.querySelector('#phone');
  const email = document.querySelector('#email');
  const comment = document.querySelector('#comment');

  
});
