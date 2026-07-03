// 1. Componente Header: Solo se encarga del título
const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

// 2. Component Content: Muestra las partes y ejercicios
const Content = (props) => {
  return(
    <div>
      {/* AQUÍ Content ya NO muestra nada por sí mismo.
          Solo delega en el Componente Part */}
      <Part part={props.course.parts[0].name} exercises={props.course.parts[0].exercises} />
      <Part part={props.course.parts[1].name} exercises={props.course.parts[1].exercises} />
      <Part part={props.course.parts[2].name} exercises={props.course.parts[2].exercises} />
    </div>
  )
}

const Part = (props) => {
  return(
    <p>{props.part} {props.exercises}</p>
  )
}

// 3. Componente Total: Solo calcula y muestra la suma
const Total = (props) =>{
  return(
    <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10},
      { name: 'Using props to pass data', exercises: 7},
      { name: 'State of a component', exercises: 14}  
    ]
  }
  
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course}/>      
    </div>
  )
}

export default App
