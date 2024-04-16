document.addEventListener('DOMContentLoaded', function () {
  const card = document.querySelector('.container');
  if (card) {
    card.addEventListener('mouseenter', () => {
      setTimeout(() => {
        card.style.boxShadow = '2px 2px 11px 3px rgba(66, 249, 198, 0.5)';
      }, 200);
    });
    card.addEventListener('mouseleave', () => {
      setTimeout(() => {
        card.style.boxShadow = '1px 1px 6px rgba(0, 0, 0, 0.5)';
      }, 200);
    });
  }
});
