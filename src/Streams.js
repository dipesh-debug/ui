import React from "react";
import './Streams.css';
class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			datas: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
"http://127.0.0.1:9000/api/streams/matches?format=json")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					datas: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, datas } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Please wait some time.... </h1> </div> ;

		return (
          
		<div className = "App">
              <link href = "F:\MAJOR PROJECT\TEST\Login-fetch-Frontend\src\Streams.css"></link>
			<h1> List of Matches </h1> {
				datas.map((data) => (
				<ul >
          <li>Match_id:{data.id},</li>
					<li>Description : { data.description },</li>
          <li>embded_code: <a href = { data.embed_code}>{data.embed_code}</a></li>
					{/* <li>status: { data.status }</li> */}
					</ul>
				))
			}
        
		</div>
	);
}
}

export default App;