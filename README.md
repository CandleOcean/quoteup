# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

import { React, useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'
import ocean from'./oceaface.png'

// https://jsonplaceholder.typicode.com/users
// https://api.quotable.io/random
// https://type.fit/api/quotes

function App() {
const [quotes, setQuotes] = useState([])
const [quote, setQuote] = useState([])

async function fetchData(){
try {
const response = await
axios.get('https://api.quotable.io/random')
setQuotes([response.data])
} catch (error) {
console.log(error)
}  
 }

const getRandomQuote = (quotes) => {
return quotes[Math.floor(Math.random() * quotes.length)]
}
const getNewQuote = () => {
// return <h3>"{getRandomQuote(quotes)}"</h3>
setQuote([getRandomQuote(quotes)])
}

useEffect(() => {
fetchData()
}, [])

return (
<section>
<div className='head'>
<img style = {{ marginTop: 10}} src={ocean} alt='programmer' width={60}/>
<div className='picandcontent'>
<h1><b>QUOTES GENERATOR</b></h1>
<h2>Motivate yourself everyday with unending quotes</h2>
</div>
</div>

      <div className='main'>
      <h1>Nonet Quotes!</h1>
      <button onClick={getNewQuote}>Fresh Quote!</button>
      button ?
      {quotes.map((quote, index) => {
        return (
          <div>
            <h3 key = {index}>"{quote.content}"</h3>
            <i>~{quote.author}</i>
          </div>
        )
      })}
      :
      {quote.map((qt, id) => {
        return (
          <div>
            <h3 key = {id}>"{qt.content}"</h3>
            <i>~{qt.author}</i>
          </div>
        )
      })}
      </div>
    </section>

);
}

export default App;
