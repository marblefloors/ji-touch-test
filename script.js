const slides = document.getElementById('slides');
  let currentIndex = 0;

  function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Следующий слайд
  function nextSlide() {
    if (currentIndex < 2) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
  }

  // Предыдущий слайд
  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = 2;
    }
    updateSlider();
  }

  
  // Повесил обработчики на кнопки для минимального взаимодействия
  function register() {
    alert("Вы записались!");
  }

  function watch() {
    alert("Вы посмотрели мастеров!");
  }

  function read() {
    alert("Вы ознакомились с отзывами!");
  }