const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting){
            entry.target.classList.add('home-show');
        }
        else {
            entry.target.classList.remove('home-show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.home-hidden');
hiddenElements.forEach((el) => observer.observe(el));

/***Work */
// const contentItems = document.querySelectorAll('.content-item');
// let currentIndex = 0;

// // Initialize the first content item as visible
// contentItems[currentIndex].style.display = 'grid';
// const initialImages = contentItems[currentIndex].querySelectorAll('.work-hidden');
// initialImages.forEach(el => el.classList.add('work-show'));

// function updateContent(nextIndex) {
//   if (nextIndex >= 0 && nextIndex < contentItems.length) {
//     // Hide current content
//     const currentContent = contentItems[currentIndex];
//     const currentImages = currentContent.querySelectorAll('.work-hidden');
//     currentImages.forEach(el => el.classList.remove('work-show'));

//     setTimeout(() => {
//       currentContent.style.display = 'none';

//       // Show next content
//       const nextContent = contentItems[nextIndex];
//       nextContent.style.display = 'grid';
//       const nextImages = nextContent.querySelectorAll('.work-hidden');
//       nextImages.forEach(el => el.classList.add('work-show'));

//       currentIndex = nextIndex;
//     }, 1000); // Match this duration with your CSS transition duration
//   }
// }

// window.addEventListener('wheel', (event) => {
//   if (event.deltaY > 0 && currentIndex < contentItems.length - 1) { // Scroll down
//     updateContent(currentIndex + 1);
//   } else if (event.deltaY < 0 && currentIndex > 0) { // Scroll up
//     updateContent(currentIndex - 1);
//   }
// });