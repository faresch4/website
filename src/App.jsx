import {useState} from 'react'


function Square({value, onCLickSquare}) {  //Defining the square component and passing the value of the button X or O and also passing onClickSquare function as an argument to the component so we can use it on the onClick event handler

  return <button className="square" onClick={onCLickSquare}>{value}</button>
}

function Start({onClickBtn}) {
  
  return <button onClick={onClickBtn}>Go to game Start</button>
}

// Defining the Board component

export default function Board() {
  const [isX , setIsX] = useState(true) //tracking the state of the current square(if is X or O) to decide the order of the next move
  const [nextPlayer ,setNextPlayer] = useState(`Next player is X`)
  let [squares,setSquares] = useState(Array(9).fill(null)) // defining a squares array of 9 elements with initial value of null
  function handleClick(i) { //THis function tells us what to do once we click the button returned by Square
    let nextSquare = squares.slice() // Making a copy of squares array  recommende for immutation
    if(!squares[i] && !CalculateWinner() ) { // if the value of an element in the squares array is null we change it with 'X'
      if(isX) { //checking if we are on the X order
        nextSquare[i] = 'X'
       
      }else {   // if we are on the O order
        nextSquare[i] = 'O'
      }
    
      setSquares(nextSquare)  // We change the initial squares array that has null values with a new nextSquares array that has the updated element values
      setIsX(!isX) // Now we change the order between X and O's
   
      setNextPlayer(`Next player is ${isX ? 'O' : 'X'}`)
    }
   
  }
  function  gameStart() {
        setSquares(Array(9).fill(null))

  }
  function CalculateWinner() {

    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];
    for(let combo of winningCombinations) {
  
      if(squares[combo[0]] == squares[combo[1]] &&  squares[combo[1]] == squares[combo[2]]) {
        if(squares[combo[0]] !== null) {   // This returns true of false whenever we call the calculateWinner in the line 22
          return (
            <>
             <span>{squares[combo[1]]} is a winner !</span> 
             
            </>
          


          )
        }
       
      }else if(squares.every((el) => el !== null)) { // The CalculateWinner function returns true boolean
        
          return 'This game is a draw';
      }
      // }else {
  
      // }
        }
      }
    return( // This is what it will be shown in the UI .
      <>
        <div className="board-row">
        
        <Square value={squares[0]}  onCLickSquare = {() => handleClick(0)}/>
        <Square value={squares[1]}  onCLickSquare = {() => handleClick(1)} />
        <Square value={squares[2]}  onCLickSquare = {() => handleClick(2)} />
        </div>
        <div className="board-row">
        <Square value={squares[3]}  onCLickSquare = {() => handleClick(3)} />
        <Square value={squares[4]}  onCLickSquare = {() => handleClick(4)} />
        <Square value={squares[5]}  onCLickSquare = {() => handleClick(5)} />
        </div>
        <div className="board-row">
        <Square value={squares[6]}  onCLickSquare = {() => handleClick(6)}/>
        <Square value={squares[7]}  onCLickSquare = {() => handleClick(7)} />
        <Square value={squares[8]}  onCLickSquare = {() => handleClick(8)} />
        </div>
        <div className='Winner'>
     
        <CalculateWinner />
        <br></br>
        <Start onClickBtn = {gameStart} />
        <span>{nextPlayer}</span>
        </div>
      
      </>
      
    )
} 