
  let isFullTextDisplayed = false; // Flag to keep track of whether the full paragraph is displayed or not

  function toggleText() {
    let main = document.getElementById("para");
    let fullPara = document.getElementById("paraa");
    
    if (isFullTextDisplayed) {
      // If the full paragraph is displayed, show the truncated version (Read More)
      fullPara.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit sunt ratione dolor deserunt! Quam <span onclick=\"toggleText()\" style=\"color: blue; cursor: pointer;\">Read More</span>";
    } else {
      // If the truncated version is displayed, show the full paragraph (Read Less)
      fullPara.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit sunt ratione dolor deserunt! Quam velit sit minima autem voluptatem inventore, praesentium eos et, aliquam assumenda iusto, consectetur ut hic officia. <span onclick=\"toggleText()\" style=\"color: blue; cursor: pointer;\">Read Less</span>";
    }
    
    isFullTextDisplayed = !isFullTextDisplayed; // Toggle the flag
  }

  function startRotation() {
    const logoContainer = document.querySelector('.logo-container');
    logoContainer.classList.add('rotating');
  
    // Remove the rotating class after the animation finishes
    setTimeout(() => {
      logoContainer.classList.remove('rotating');
    }, 4000); // Animation duration is 1 seconds (1 rotations * 1 seconds per rotation)
  }
  

