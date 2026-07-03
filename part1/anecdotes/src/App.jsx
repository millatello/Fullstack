import { useState } from 'react'

const Winner = (props) => {
    const numeroMayor = Math.max(...props.allVotes)
    const indiceDelMayor = props.allVotes.indexOf(numeroMayor)   
    if (numeroMayor === 0){
      return(
        <div>

        </div>
       )
    }
    return(
      <div>
      {props.anecdotes[indiceDelMayor]}
      <br/>
       has {numeroMayor} votes 
      </div>
    )

  }



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [allVotes, setVote] = useState(Array(anecdotes.length).fill(0))

  const handleNextClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const handleVoteClick = () => {
    const copy = [...allVotes]    
    copy[selected] += 1
    setVote(copy)
  }

  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br/>
      has {allVotes[selected]} votes
      <br/>
      <button onClick={handleVoteClick}>
        vote
      </button>
      <button onClick={handleNextClick}>
        next anecdote
      </button>
      <h1>Anecdote with most votes</h1>
      <Winner allVotes={allVotes} anecdotes={anecdotes} />

    </div>    
  )
}

export default App