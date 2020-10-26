const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerText = highScores
.map(score =>{
   return `<li class=high-score>${score.name}-${score.score}</li>`;
})