import React from 'react'
import ReactDOM from 'react-dom'

/*let myname = 'Durai'
let obj    = {
	fname : 'mynae',
	lname : '333' 
}

const ele = <h1>Hai to all i am coming {obj.lname}</h1>
*/

/*function getvalues(name='Durai', lname='Elangovan'){
	return <div>
				<h1>Hai {name}</h1>
				<h2> welcome {lname}</h2>
			</div>
}
*/

class Cartoon extends React.Component{
	render(){
		return <h1>Hai to all {this.props.name} {this.props.place} </h1>
	}

}

ReactDOM.render(
		<Cartoon name="Durai" place="Beijing" />	, 	document.getElementById('root1')

	);

	ReactDOM.render(
		<Cartoon name="Karthi" place="Beijing" />	, 	document.getElementById('root')

	);



