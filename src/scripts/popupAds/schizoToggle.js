  document.querySelectorAll('.schizoToggle').forEach(box => {
    box.classList.add('seizureBackground');
  });





document.addEventListener('click', function (e) {
  if (e.target.classList.contains('stopSchizo-btn')) {
    document.querySelectorAll('.schizoToggle').forEach(box => {
    box.classList.remove('seizureBackground');
  });
  }
});