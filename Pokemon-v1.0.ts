import { question } from 'readline-sync'

let myTurn = true
let curPkm
var actualDmg

const oppPkms = [
  {
    Name: "Totodile",
    HP: 180,
    Atk: 40,
    Def: 60,
    Type: "Water",
    poiCount: 0,
    debuffStatus: false,
    debuffCount: 0,
    leechCount: 0,
  },
  {
    Name: "Cyndaquil",
    HP: 140,
    Atk: 55,
    Def: 30,
    Type: "Fire",
    poiCount: 0,
    debuffStatus: false,
    debuffCount: 0,
    leechCount: 0,
  },
  {
    Name: "Chikorita",
    HP: 150,
    Atk: 30,
    Def: 50,
    Type: "Grass",
    poiCount: 0,
    debuffStatus: false,
    debuffCount: 0,
    leechCount: 0,
  }
]

const allPkms = [
  {
    Name: "Squirtle",
    HP: 200,
    Atk: 50,
    Def: 30,
    Type: "Water",
    poiCount: 0,
    debuffStatus: false,
    debuffCount: 0,
    leechCount: 0,
  },
  {
    Name: "Charmander",
    HP: 140,
    Atk: 25,
    Def: 40,
    Type: "Fire",
    poiCount: 0,
    debuffStatus: false,
    debuffCount: 0,
    leechCount: 0,
  },
  {
    Name: "Bulbasaur",
    HP: 160,
    Atk: 35,
    Def: 30,
    Type: "Grass",
    poiCount: 0,
    debuffStatus: false,
    debuffCount: 0,
    leechCount: 0,
  }
]

const allSkills = [
  {
    sName: "Tackle",
    sDmg: 20,
    sType: "Normal",
  },
  {
    sName: "Slam",
    sDmg: 25,
    sType: "Normal",
  },
  {
    sName: "Tail Whip",
    sDmg: 0,
    sType: "Debuff",
  },
  {
    sName: "Toxic",
    sType: "Poison",
  },
  {
    sName: "Hypnosis",
    sType: "Sleep",
  },
  {
    sName: "Vine Whip",
    sDmg: 60,
    sType: "Grass",
  },
  {
    sName: "Ember",
    sDmg: 55,
    sType: "Fire",
  },
  {
    sName: "Water Gun",
    sDmg: 45,
    sType: "Water",
  },
  {
    sName: "Leech Seed",
    sType: "Special",
  }
]

function displayAllPkns(array) {
  let i = 0
  while (i < 3) {
    console.log(i + ". " + array[i].Name)
    i++
  }
}

function displayAllSkills(array) {
  let i = 0
  while (i < 9) {
    console.log(i + ". " + array[i].sName + " (" + array[i].sType + ")")
    i++
  }
}

let randPkm = Math.floor(Math.random() * 3)
console.log("Pokemon Game Start")
console.log("--------------------------------------------------")
console.log("| Opponent summons " + oppPkms[randPkm].Name + " | ")
console.log("--------------------------------------------------")
console.log("Please choose a pokemon from below :")
displayAllPkns(allPkms)
let chosenPkm = question("Select a Pokemon\n")
console.log("You had chosen " + allPkms[chosenPkm].Name)
console.log("Health - " + allPkms[chosenPkm].HP)
console.log("Atk - " + allPkms[chosenPkm].Atk)
console.log("Def - " + allPkms[chosenPkm].Def)
console.log("Type - " + allPkms[chosenPkm].Type)
curPkm = allPkms[chosenPkm].Name
let curPkmAtk = allPkms[chosenPkm].Atk
let curPkmDef = allPkms[chosenPkm].Def
let curPkmHp = allPkms[chosenPkm].HP
let curPkmDfSts = allPkms[chosenPkm].debuffStatus
let curPkmDfCount = allPkms[chosenPkm].debuffStatus
let oppPkmAtk = oppPkms[randPkm].Atk
let oppPkmDef = oppPkms[randPkm].Def
let oppPkmDfSts = oppPkms[randPkm].debuffStatus
let oppPkmDfCount = oppPkms[randPkm].debuffCount
let oppPkmLeechCount = oppPkms[randPkm].leechCount
let moveAtk
let reducedAtk
let reducedDef

if (chosenPkm) {
  console.log("--------------------------------------------------")
  console.log(" | " + curPkm + " has been summoned! | ")
  console.log("--------------------------------------------------")
  while (allPkms[chosenPkm].HP > 0 && oppPkms[randPkm].HP > 0) {
    actualDmg = 0
    if (myTurn) {
      console.log("--------------------------------------------------")
      console.log(" | It is my turn | ")
      console.log("--------------------------------------------------")
      console.log("Availabe Skills :")
      displayAllSkills(allSkills)
      let chosenSkill = question("Select a skill\n")
      console.log(curPkm + " uses " + allSkills[chosenSkill].sName)
      console.log("--------------------------------------------------")

      //Tackle Skill
      if (allSkills[chosenSkill].sName === "Tackle") {
        moveAtk = allPkms[chosenPkm].Atk + allSkills[chosenSkill].sDmg
        console.log("Total Damage : " + moveAtk)
        console.log("Opponent pokemon's Atk : " + oppPkmAtk)
        if (moveAtk > oppPkmAtk) {
          actualDmg = moveAtk - oppPkmAtk
          console.log(allSkills[chosenSkill].sName + " skill deals " + actualDmg + " damage")
          oppPkms[randPkm].HP = oppPkms[randPkm].HP - actualDmg
          console.log(oppPkms[randPkm].Name + "'s HP left " + oppPkms[randPkm].HP)
        } else {
          console.log("The attack is lower or equal to Opponent's pokemon Atk. No damage deals to Opponent's pokemon HP.")
          console.log(oppPkms[randPkm].Name + "'s HP left " + oppPkms[randPkm].HP)
        }
      }

      //Slam Skill
      if (allSkills[chosenSkill].sName === "Slam") {
        moveAtk = allPkms[chosenPkm].Atk + allSkills[chosenSkill].sDmg
        console.log("Total Damage : " + moveAtk)
        console.log("Opponent pokemon's Def : " + oppPkmDef)
        if (moveAtk > oppPkmDef) {
          actualDmg = moveAtk - oppPkmDef
          console.log(allSkills[chosenSkill].sName + " skill deals " + actualDmg + " damage")
          oppPkms[randPkm].HP = oppPkms[randPkm].HP - actualDmg
          console.log(oppPkms[randPkm].Name + "'s HP left " + oppPkms[randPkm].HP)
        } else {
          console.log("The attack is lower or equal to Opponent's pokemon Def. No damage deals to Opponent's pokemon HP.")
          console.log(oppPkms[randPkm].Name + "'s HP left " + oppPkms[randPkm].HP)
        }
      }

      //Debuff skill
      if (allSkills[chosenSkill].sName === "Tail Whip" && oppPkmDfSts == false) {
        oppPkmDfCount = 4
      } else if (allSkills[chosenSkill].sName === "Tail Whip" && oppPkmDfSts == true) {
        oppPkmDfCount = 4
        if (oppPkmDfCount > 0) {
          reducedAtk = oppPkmAtk - 20
          reducedDef = oppPkmDef - 10
          oppPkmAtk = reducedAtk
          oppPkmDef = reducedDef
          console.log(oppPkms[randPkm].Name + "'s Atk has been reduced 20")
          console.log(oppPkms[randPkm].Name + "'s Def has been reduced 10")
          console.log(oppPkms[randPkm].Name + "'s current stats : ")
          console.log("Atk : " + oppPkmAtk + " and Def : " + oppPkmDef)
          oppPkmDfCount = oppPkmDfCount - 1
          console.log("Pokemon's Atk and Def has been reduced. Turns left : " + oppPkmDfCount)
        }
      } else {
        if (oppPkmDfCount == 1) {
          oppPkmDfSts = false
          oppPkmAtk = oppPkms[randPkm].Atk
          oppPkmDef = oppPkms[randPkm].Def
          console.log("--------------------------------------------------")
          console.log("Debuff effect ended. Atk and Dmg back to normal.")
          console.log(oppPkms[randPkm].Name + "'s current stats : ")
          console.log("Atk : " + oppPkmAtk + " and Def : " + oppPkmDef)
        } else if (oppPkmDfSts = true && oppPkmDfCount > 0) {
          oppPkmDfCount = oppPkmDfCount - 1
          console.log("--------------------------------------------------")
          console.log("Debuff duration left : " + oppPkmDfCount + " turns")
          console.log("Opponent's pokemon current Atk : " + oppPkmAtk)
          console.log("Opponent's pokemon current Def : " + oppPkmDef)
        }
      }
      if (oppPkmDfCount > 0 && oppPkmDfCount > 3 && oppPkmDfSts == false) {
        reducedAtk = oppPkmAtk - 20
        reducedDef = oppPkmDef - 10
        oppPkmAtk = reducedAtk
        oppPkmDef = reducedDef
        console.log(oppPkms[randPkm].Name + "'s Atk has been reduced 20")
        console.log(oppPkms[randPkm].Name + "'s Def has been reduced 10")
        console.log(oppPkms[randPkm].Name + "'s current stats : ")
        console.log("Atk : " + oppPkmAtk + " and Def : " + oppPkmDef)
        oppPkmDfCount = oppPkmDfCount - 1
        console.log("Pokemon's Atk and Def has been reduced. Turns left : " + oppPkmDfCount)
        oppPkmDfSts = true
      }

      //Poison Skill
      if (allSkills[chosenSkill].sType === "Poison") {
        oppPkms[randPkm].poiCount = 5
      }
      if (oppPkms[randPkm].poiCount > 0 && oppPkms[randPkm].poiCount <= 5) {
        const dpt = oppPkms[randPkm].HP * 0.1
        console.log("--------------------------------------------------")
        console.log("The pokemon is having poison effect and taking " + Math.round(dpt) + " damage this turn")
        oppPkms[randPkm].HP = oppPkms[randPkm].HP - dpt
        console.log(oppPkms[randPkm].Name + "'s HP left " + Math.round(oppPkms[randPkm].HP))
        oppPkms[randPkm].poiCount = oppPkms[randPkm].poiCount - 1
        if (oppPkms[randPkm].poiCount != 0) {
          console.log("Poison effect remaining turns : " + oppPkms[randPkm].poiCount)
        } else {
          console.log("Poison effect ended")
        }
      }

      //Sleep Skill
      if (allSkills[chosenSkill].sType === "Sleep") {
        myTurn = true
        console.log("Opponent's pokemon has been hypnosis and in Sleep status now. It is my turn again.")
        console.log("--------------------------------------------------")
      } else {
        myTurn = false
      }

      //Fire Skill
      if (allSkills[chosenSkill].sType === "Fire") {
        if (oppPkms[randPkm].Type === "Grass") {
          let doubleDmg = allSkills[chosenSkill].sDmg * 2
          actualDmg = curPkmAtk + doubleDmg
          oppPkms[randPkm].HP = oppPkms[randPkm].HP - actualDmg
          console.log("Fire type skill is effective against Grass type of pokemon")
          console.log("The " + allSkills[chosenSkill].sName + " skill deals double damage : " + doubleDmg)
          console.log(oppPkms[randPkm].Name + "'s HP left " + oppPkms[randPkm].HP)
        } else if (oppPkms[randPkm].Type === "Water") {
          let halveDmg = allSkills[chosenSkill].sDmg / 2
          actualDmg = curPkmAtk + halveDmg
          oppPkms[randPkm].HP = oppPkms[randPkm].HP - actualDmg
          console.log("Fire type skill is weak against Water type of pokemon")
          console.log("The " + allSkills[chosenSkill].sName + "  deals halve damage : " + halveDmg)
          console.log(oppPkms[randPkm].Name + "'s HP left " + oppPkms[randPkm].HP)
        } else {
          actualDmg = curPkmAtk + allSkills[chosenSkill].sDmg
          oppPkms[randPkm].HP = oppPkms[randPkm].HP - actualDmg
          console.log(oppPkms[randPkm].Name + "'s HP left " + oppPkms[randPkm].HP)
        }
      }

      //Water Skill
      if (allSkills[chosenSkill].sType === "Water") {
        if (oppPkms[randPkm].Type === "Fire") {
          let doubleDmg = allSkills[chosenSkill].sDmg * 2
          actualDmg = curPkmAtk + doubleDmg
          oppPkms[randPkm].HP = oppPkms[randPkm].HP - actualDmg
          console.log("Water type skill is effective against Fire type of pokemon")
          console.log("The " + allSkills[chosenSkill].sName + " skill deals double damage : " + doubleDmg)
          console.log(oppPkms[randPkm].Name + "'s HP left " + oppPkms[randPkm].HP)
        } else if (oppPkms[randPkm].Type === "Grass") {
          let halveDmg = allSkills[chosenSkill].sDmg / 2
          actualDmg = curPkmAtk + halveDmg
          oppPkms[randPkm].HP = oppPkms[randPkm].HP - actualDmg
          console.log("Water type skill is weak against Grass type of pokemon")
          console.log("The " + allSkills[chosenSkill].sName + "  deals halve damage : " + halveDmg)
          console.log(oppPkms[randPkm].Name + "'s HP left " + oppPkms[randPkm].HP)
        } else {
          actualDmg = curPkmAtk + allSkills[chosenSkill].sDmg
          oppPkms[randPkm].HP = oppPkms[randPkm].HP - actualDmg
          console.log(oppPkms[randPkm].Name + "'s HP left " + oppPkms[randPkm].HP)
        }
      }

      //Grass Skill
      if (allSkills[chosenSkill].sType === "Grass") {
        if (oppPkms[randPkm].Type === "Water") {
          let doubleDmg = allSkills[chosenSkill].sDmg * 2
          actualDmg = curPkmAtk + doubleDmg
          oppPkms[randPkm].HP = oppPkms[randPkm].HP - actualDmg
          console.log("Grass type skill is effective against Water type of pokemon")
          console.log("The " + allSkills[chosenSkill].sName + " skill deals double damage : " + doubleDmg)
          console.log(oppPkms[randPkm].Name + "'s HP left " + oppPkms[randPkm].HP)
        } else if (oppPkms[randPkm].Type === "Fire") {
          let halveDmg = allSkills[chosenSkill].sDmg / 2
          actualDmg = curPkmAtk + halveDmg
          oppPkms[randPkm].HP = oppPkms[randPkm].HP - actualDmg
          console.log("Grass type skill is weak against Fire type of pokemon")
          console.log("The " + allSkills[chosenSkill].sName + "  deals halve damage : " + halveDmg)
          console.log(oppPkms[randPkm].Name + "'s HP left " + oppPkms[randPkm].HP)
        } else {
          actualDmg = curPkmAtk + allSkills[chosenSkill].sDmg
          oppPkms[randPkm].HP = oppPkms[randPkm].HP - actualDmg
          console.log(oppPkms[randPkm].Name + "'s HP left " + oppPkms[randPkm].HP)
        }
      }

      //Leech Seed
      if (allSkills[chosenSkill].sName === "Leech Seed") {
        oppPkmLeechCount = 5
      }
      if (oppPkmLeechCount > 0 && oppPkmLeechCount <= 5) {
        const leechDmg = oppPkms[randPkm].HP * 0.05
        oppPkms[randPkm].HP = oppPkms[randPkm].HP - leechDmg
        console.log("--------------------------------------------------")
        console.log("My Pokemon " + curPkm + " is leeching " + Math.round(leechDmg) + " HP from " + oppPkms[randPkm].Name + " per turn")
        curPkmHp = curPkmHp + leechDmg
        console.log("My Pokemon " + curPkm + " HP increased to " + Math.round(curPkmHp))
        console.log("Opponent's pokemon HP left " + Math.round(oppPkms[randPkm].HP))
        oppPkmLeechCount = oppPkmLeechCount - 1
        if (oppPkmLeechCount != 0) {
          console.log("Leech effect remaining turns : " + oppPkmLeechCount)
        } else {
          console.log("Leech effect ended")
        }
      }

    } else if (!myTurn) {
      let actualDmg = 0
      moveAtk = 0
      let randSkill = Math.floor(Math.random() * 5)
      //console.log(randSkill)
      console.log("--------------------------------------------------")
      console.log("| Opponent's turn |")
      console.log("--------------------------------------------------")
      console.log(oppPkms[randPkm].Name + " uses " + allSkills[randSkill].sName)
      console.log("--------------------------------------------------")

      //Tackle Skill
      if (randSkill == 0) {
        moveAtk = oppPkmAtk + allSkills[randSkill].sDmg
        console.log("Total Damage : " + moveAtk)
        console.log("My pokemon's Atk : " + curPkmAtk)
        if (moveAtk > curPkmAtk) {
          actualDmg = moveAtk - curPkmAtk
          console.log(allSkills[randSkill].sName + " skill deals " + actualDmg + " damage")
          curPkmHp = curPkmHp - actualDmg
          console.log(curPkm + "'s HP left " + curPkmHp)
        } else {
          console.log("My pokemon's attack is higher than opponent's pokemon attack. No damage receive.")
          console.log(curPkm + "'s HP left " + curPkmHp)
        }
      }

      //Slam Skill
      if (randSkill == 1) {
        moveAtk = oppPkmAtk + allSkills[randSkill].sDmg
        console.log("Total Damage : " + moveAtk)
        console.log("My pokemon's Def : " + curPkmAtk)
        if (moveAtk > curPkmDef) {
          actualDmg = moveAtk - curPkmAtk
          console.log(allSkills[randSkill].sName + " skill deals " + actualDmg + " damage")
          curPkmHp = curPkmHp - actualDmg
          console.log(curPkm + "'s HP left " + curPkmHp)
        } else {
          console.log("My pokemon's defense is higher than opponent's pokemon attack. No damage receive.")
          console.log(curPkm + "'s HP left " + curPkmHp)
        }
      }

      //Debuff skill
      if (randSkill == 2 && curPkmDfSts == false) {
        curPkmDfCount = 4
      } else if (randSkill == 2 && curPkmDfSts == true) {
        curPkmDfCount = 4
        if (curPkmDfCount > 0) {
          reducedAtk = curPkmAtk - 20
          reducedDef = curPkmDef - 10
          curPkmAtk = reducedAtk
          curPkmDef = reducedDef
          console.log(curPkm + "'s Atk has been reduced 20")
          console.log(curPkm + "'s Def has been reduced 10")
          console.log(curPkm + "'s current stats : ")
          console.log("Atk : " + curPkmAtk + " and Def : " + curPkmDef)
          curPkmDfCount = curPkmDfCount - 1
          console.log("Pokemon's Atk and Def has been reduced. Turns left : " + curPkmDfCount)
        }
      } else {
        if (curPkmDfCount == 1) {
          curPkmDfSts = false
          curPkmAtk = allPkms[chosenPkm].Atk
          curPkmDef = allPkms[chosenPkm].Def
          console.log("--------------------------------------------------")
          console.log("Debuff effect ended. Atk and Dmg back to normal.")
          console.log(curPkm + "'s current stats : ")
          console.log("Atk : " + curPkmAtk + " and Def : " + curPkmDef)
        } else if (curPkmDfSts = true && curPkmDfCount > 0) {
          curPkmDfCount = curPkmDfCount - 1
          console.log("--------------------------------------------------")
          console.log("Debuff duration left : " + curPkmDfCount + " turns")
          console.log("My pokemon current Atk : " + curPkmAtk)
          console.log("My pokemon current Def : " + curPkmDef)
        }
      }
      if (curPkmDfCount > 0 && curPkmDfCount > 3 && curPkmDfSts == false) {
        reducedAtk = curPkmAtk - 20
        reducedDef = curPkmDef - 10
        curPkmAtk = reducedAtk
        curPkmDef = reducedDef
        console.log(curPkm + "'s Atk has been reduced 20")
        console.log(curPkm + "'s Def has been reduced 10")
        console.log(curPkm + "'s current stats : ")
        console.log("Atk : " + curPkmAtk + " and Def : " + curPkmDef)
        curPkmDfCount = curPkmDfCount - 1
        console.log("Pokemon's Atk and Def has been reduced. Turns left : " + curPkmDfCount)
        curPkmDfSts = true
      }

      //Poison Skill
      if (randSkill == 3) {
        allPkms[chosenPkm].poiCount = 5
      }
      if (allPkms[chosenPkm].poiCount > 0 && allPkms[chosenPkm].poiCount <= 5) {
        const dpt = curPkmHp * 0.1
        console.log("--------------------------------------------------")
        console.log("The pokemon is having poison effect and taking " + Math.round(dpt) + " damage this turn")
        curPkmHp = curPkmHp - dpt
        console.log(curPkm + "'s HP left " + Math.round(curPkmHp))
        allPkms[chosenPkm].poiCount = allPkms[chosenPkm].poiCount - 1
        if (allPkms[chosenPkm].poiCount != 0) {
          console.log("Poison effect remaining turns : " + allPkms[chosenPkm].poiCount)
        } else {
          console.log("Poison effect ended")
        }
      }

      //Sleep Skill
      if (randSkill == 4) {
        myTurn = false
        console.log("My pokemon has been hypnosis and in Sleep status now. It is opponent turn again.")
        console.log("--------------------------------------------------")
      } else {
        myTurn = true
      }
    } else {
      console.log("")
    }
  }
  if (oppPkms[randPkm].HP <= 0) {
    console.log("______________________________________________________")
    console.log("Opponent's pokemon " + oppPkms[randPkm].Name + " has been defeated")
    console.log(curPkm + " has gained 120 exp")
  } else if (curPkmHp <= 0) {
    console.log("______________________________________________________")
    console.log(curPkm + " fainted")
    console.log("GAME OVER!")
  }
}
