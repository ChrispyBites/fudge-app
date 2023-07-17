const characterData = [
    {
        id:0,
        name:"Reve ad Texidore",
        player:"Bret Woolbright",
        race:"Human - Jenai",
        archtype:"Keen Investigator",
        attributes:[
            {
                id:0,
                name:"Strength",
                value:-3
            }
        ]
    }
]

const levels = ["Terrible","Poor","Mediocre","Fair","Good","Great","Superb"];
const dice = [-1,0,1];
const modal = document.getElementById("msgModal");

function rollFudge(score){
    let rollResult = rollFudgeDice();
    let resultingLevel = calculateLevel(score,rollResult);
    let rollDisplay = document.getElementById("rollResult");
    let levelDisplay = document.getElementById("resultingLevel");
    rollDisplay.innerText = rollResult.toString();
    levelDisplay.innerText = resultingLevel;
    modal.style.display = "block";
}

function rollFudgeDice(){
    let rollResult = []
    for (let i = 0; i < 4; i++){
        const randomIndex = Math.floor(Math.random() * dice.length);
        rollResult.push(dice[randomIndex])
    }

    return rollResult;
}

function calculateLevel(score,rollResult){
    const result = score + rollResult.reduce((sum,val) => sum + val,0);
    const lvlIndex = Math.max(Math.min(result + 3,6),0);
    const level = levels[lvlIndex];
    
    let degree = '';

    if(result < -3) {
        let degreeCount = Math.abs(result + 3);
        degree = '-'.repeat(degreeCount);
    } else if (result > 3){
        let degreeCount = Math.abs(result - 3);
        degree = '+'.repeat(degreeCount);
    }
    return level + degree;
}

// UI Functions
function swapDescription(visibleId){
    let hiddenId = (visibleId = "portrait") ? "text" : "portrait";
    console.log(`I am visible:${visibleId}`);
    console.log(`I am hidden:${hiddenId}`);
    document.getElementById(visibleId).classList.add("isBehind");
    document.getElementById(hiddenId).classList.remove("isBehind");
}

function closeModal(){
    modal.style.display = "none";
}