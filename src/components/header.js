import React from 'react';

const styles = {
  intro: {
    position: 'relative',
    overflow: 'auto',
    height: 800
  },
  intro_text: {
    opacity: '1!important',
    verticalAlign: 'middle',
    marginTop: 130,
    textTransform: 'italic',
    color: 'grey',
    display: 'inline-block',
    textAlign: 'center',
    width: 500,
    backgroundColor: 'transparentize(#FFFFFF, .01)'
  },
  headline: {
    fontSize:30
  },
  sub_headline: {
    fontSize:20
  },
  main_button: {
    background: '#efefef',
    color: '#fff',
    fontFamily: 'Georgia',
    fontSize: 20,
    height: 60,
    width: 150,
    lineHeight: 60,
    border: 0,
    transition: 'all 0.3s ease 0s',
    textAlign: 'center',
    // margin: '30px auto 30px auto'
  }
}
/*      <div style={styles.intro}>
        <div style={styles.intro_text}>
            <p style={styles.headline}>yourTurn</p>
            <p style={styles.sub_headline}>This is a single page web application that enables users ~
            <br /><br />Built with: React, WebPack, Material UI, HTML/CSS, Node.js, Express<br />
            <a href="#startpoint" target="_self" style={styles.main_button}>Click to start</a>
            </p>
        </div>
        <div style={{background: "url(src/img/cover.jpg)", opacity: 0.2, backgroundSize: 'cover', height: 700, top:0, left:0, bottom:0, right:0, position: 'absolute', zIndex: -1}}></div>
      </div>
*/

export default class Header extends React.Component {

  render() {
    return (
      <div>
        <div style={{background: "url(src/img/cover.jpg)", backgroundPosition: 'fixed', overflow: 'hidden', opacity: 0.3, position: 'absolute', zIndex: -1}}></div>
      </div>
    );
  }
}