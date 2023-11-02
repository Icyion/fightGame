let monsterMeet = document.getElementById("monsterMeet-ele")
let monsterFight = document.getElementById("fightText")

let hero = {
    name: "King Eric",
    hitPts: 200,
    isAlive: false,
    atkDmg: Math.floor(Math.random() * 10) + 1
}

let enemies = {
    name: ["Deathwing", "Blood Sucker", "Ghoul", "Banshee", "Zombie"],
    hitPts: [100, 90, 80, 70, 60],
    isAlive: false,
    atkDmg: [5, 4, 3, 2, 1]
}
let randomIndex = Math.floor(Math.random()* enemies.name.length);
let randomEnemyName = enemies.name[randomIndex];

function firstScreen(){
    window.location.href = 'firstScreen.html';
}

function fightEnemy(){
    return `${hero.name} attacks and inflicts ${hero.atkDmg} Damage`
}

monsterMeet.textContent = "You have met a " + randomEnemyName;
monsterFight.textContent = fightEnemy();