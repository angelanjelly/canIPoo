import React from 'react';

const styles = {
	title: {
  	fontSize: 70,
  	marginTop: 30
  }
};

export default class Title extends React.Component {

	render() {
		return (
			<div>
				<h1 style={styles.title}>Can I P<img src="/src/img/poo.png" width="50" height="50" /><img src="/src/img/poo.png" width="50" height="50" />?</h1>
				<h4>SOS! request for toilet paper </h4>
				<img src="/src/img/toilet-paper.jpg" width="60" height="60" onClick={this.props.toiletPaperForGenderNeu.bind(null, this)} />
				<span style={{color:'white'}}>_______</span>
				<img src="/src/img/toilet-paper.jpg" width="60" height="60" onClick={this.props.toiletPaperForWomens.bind(null, this)} /><br />
				<span>Gender Neutral Bathroom</span><span style={{color:'white'}}>_</span><span>Women's Bathroom   </span>
			</div>
		);
	}
}