
export let resultFunction = (resultCard,none,flex, 
    resultCardTitle, noneTwo, flexTwo,colorOne,textOne,
    circle, noneThree, flexThree, counter,noneFour, 
    flexFour,valueOne, underLine, noneFive,flexFive,
    colorTwo,weight, valueTwo, givenValue) => {
    
        resultCard.classList.remove(none) || ``;
        resultCard.classList.add(flex) || ``;
        resultCardTitle.classList.remove(noneTwo) || ``;
        resultCardTitle.classList.add(flexTwo) || ``;
        resultCardTitle.style.color= colorOne || ``;
        resultCardTitle.textContent = textOne.toUpperCase() || ``;
        circle.classList.remove(noneThree) || ``;
        circle.classList.add(flexThree) || ``;
        counter.classList.remove(noneFour) || ``;
        counter.classList.add(flexFour) || ``;
        counter.innerText= `${valueOne}` || ``;
        underLine.classList.remove(noneFive) || ``;
        underLine.classList.add(flexFive) || ``;
        underLine.style.color= colorTwo|| ``;
        underLine.style.fontWeight= weight|| ``;
        underLine.innerText = `${valueTwo} is shortcut of ${givenValue} ` || ``;
    }
    