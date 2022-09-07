const starsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".fa-regular")
const colorsArray =["red","brown","#7700ff","lightgreen","green"]
updateRating(0)
starsEl.forEach((starsEl,index) => {
  starsEl.addEventListener("click", () => {
    updateRating(index)

  });

}); 

function updateRating(index){
  starsEl.forEach((starsEl,idx) => {
    if (idx < index + 1){
      starsEl.classList.add("active");
    } else{
      starsEl.classList.remove("active")
    }
  });
 emojisEl.forEach((emojiEl) =>{
  emojiEl.style.transform = `translateX(-${index * 50}px)`;
  emojiEl.style.color =colorsArray[index]
 });
}
  


