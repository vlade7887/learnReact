import cars from "./practice"



function App(){

const [honda, tesla] = cars;

const {speedStats: {topSpeed: teslaTopSpeed}} = tesla;
const {speedStats: {topSpeed: hondaTopSpeed}} = honda;
const {coloursByPopularity: [teslaTopColour]} = tesla;
const {coloursByPopularity: [hondaTopColour]} = honda;
console.log(teslaTopSpeed)
console.log(teslaTopColour)


  return (
    <div>    
    <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>
  </div>

  )
}

export default App;