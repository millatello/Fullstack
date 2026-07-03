import { useState } from "react"

const DisplayGood = props => <div>good {props.good}</div>
const DisplayNeutral = props => <div>neutral {props.neutral}</div>
const DisplayBad = props => <div>bad {props.bad}</div>
const DisplayTotal = props => <div>total {props.total}</div>

const Button = (props) => (
        <button onClick={props.handleClick}>{props.text}</button>
    )

const StatisticLine = (props) => {
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>    
    // <div>{props.text} {props.value}</div>
    )
}
// Componente hijo especializado en mostrar las estadísticas    
const Statistics = (props) => {
    // Calculamos el total, promedio y porcentaje aquí adentro
    // a partir de los datos frescos que entran por props.
    const total = props.good + props.neutral + props.bad


    if (total === 0){
        return (
            <>
                <h2>statistics</h2>
                <div>No feedback given</div>
            </>
        )

    }

    // Puntuación promedio (good: 1, neutral: 0, bad: -1)
    // Usuamos un condicional simple para evitar dividir por 0 al inicio
    const average = (props.good * 1 + props.neutral * 0 + props.bad * -1) / total
    // Porcentaje de comentarios positivos
    const positivePercentage = (props.good / total) * 100

    return (
        <div>
            <h2>statistics</h2>
            <table>
                <tbody>
                    <StatisticLine text="good" value={props.good} />
                    <StatisticLine text="neutral" value={props.neutral} />
                    <StatisticLine text="bad" value={props.bad} />
                    <StatisticLine text="total" value={total} /> 
                    {/* Para mostrar el promedio y porcentaje de la misma forma */}
                    <StatisticLine text="average" value={average.toFixed(1)} />
                    <StatisticLine text="positive" value={positivePercentage.toFixed(1) + " %"}  />
                </tbody>
            </table>            
        </div>
    )



}

const App = () => {    
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    

    const setToGood = (newValue) => {
        setGood(newValue)        
    }
    const setToNeutral = (newValue) => {
        setNeutral(newValue)        
    }
    const setToBad = (newValue) => {
        setBad(newValue)        
    }
    
    
    return (
        <div>
            <h1>give feedback</h1>            
            <Button handleClick={() => setToGood(good + 1)} text="good" />
            <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
            <Button handleClick={() => setToBad(bad + 1)} text="bad" />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App