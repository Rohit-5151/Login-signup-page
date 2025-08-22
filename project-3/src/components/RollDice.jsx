import styled from "styled-components";

const RollDice = (currentDice, setCurrentDice) => {

  return (
    <DiceContainer>
        <div className="dice" onClick={()=>generaterRandomNumber(1,7)}> 
            <img src={`/images/dice/dice_${currentDice}.png`} alt={`dice ${currentDice}`}/>
        </div>
        <p>Click on Dice to roll</p>
        <button>Reset Score</button>
        <button>Show Rules</button>
    </DiceContainer>
  )
}

export default RollDice;

const DiceContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 48px;
    align-items: center;

    p { 
        font-size: 24px;
    }

    .dice {
        cursor: pointer;
    }
`;
