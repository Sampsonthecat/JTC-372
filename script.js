window.onload = () => {
  setTimeout(() => {
    shrinkHeader();
  }, 1000);
});

function shrinkHeader() {
   const header = document.querySelector('.animated-header');

  header.style.padding = '10px';
  header.style.fontSize = '120px';
}
