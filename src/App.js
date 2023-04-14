import { React, useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'
import ocean from'./oceaface.png'

// https://jsonplaceholder.typicode.com/users
// https://api.quotable.io/random
// https://type.fit/api/quotes

function App() {
const [quotes, setQuotes] = useState([])

async function fetchData(){
try {
const response = await
axios.get('https://api.quotable.io/random')
setQuotes([response.data])
} catch (error) {
console.log(error)
}}

useEffect(() => {
  setInterval(() => {
    fetchData()
  }, 15000)
}, [])

return (
<section>
  <div className='head'>
    <img style = {{ marginTop: 10}} src={ocean} alt='programmer' width={60}/>
    <div className='picandcontent'>
      <h1>QUOTES GENERATOR</h1>
      <b><span style={{marginTop:0}}>Motivate yourself everyday with unending quotes</span></b>
    </div>
  </div>
  <div className='main'>
    <h1>Nonet Quotes!</h1>
    {quotes.map((quote, index) => {
      return (
        <div key = {index}>
          <h3 >"{quote.content}"</h3>
          <i >~{quote.author}</i>
        </div>
      )
    })}
  </div>
</section>
);
}
export default App