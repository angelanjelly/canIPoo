import React from 'react';

const styles = {
  intro: {
    
  },
  intro_text: {

  },
  headline: {

  },
  sub_headline: {

  },
  main_button: {

  }
}
export default class Header extends React.Component {

  render() {
    return (
      <div style={styles.intro}>
        <div style={styles.intro_text}>
            <p style={styles.headline}>yourTurn</p>
            <p style={styles.sub_headline}>This is a single page web application that enables users ~
            <br /><br />Built with: React, WebPack, Material UI, HTML/CSS, Node.js, Express</p>
           <div style={styles.main_button}>
                <a href="#startpoint" target="_self">Click to start</a>
           </div>
        </div>
      </div>
    );
  }
}