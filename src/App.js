import './App.css';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: 'Mamadou Diagne DIOP',
        bio: 'Spring Boot Backend Certified - React Frontend Certified',
        imgSrc: 'user.png',
        profession: 'Java Full Stack Developer'
      },
      show: true,
      secondsElapsed: 0,
    };

    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        secondsElapsed: prevState.secondsElapsed + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleShow = () => {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div className='App'>
        <h1> React Class Component</h1>
        <h1 style={{ backgroundColor: 'lightgreen', display: 'block' }}>Temps écoulé depuis le montage : {this.state.secondsElapsed} secondes</h1>
        <p>
          <button style={{ backgroundColor: 'yellowgreen', fontWeight: 'bold', fontSize: '1.2rem' }}
            type='button'
            onClick={this.handleShow}>
            {this.state.show ? 'Cacher les infos' : 'Afficher les infos'}
          </button> <hr />
        </p>
        <p>
          {this.state.show &&
            (
              <div>
                <img src={this.state.Person.imgSrc} alt='myPhoto'></img>
                <h3>{this.state.Person.fullName}</h3>
                <h3>{this.state.Person.profession}</h3>
                <h3>{this.state.Person.bio}</h3>

              </div>
            )
          }
        </p>
      </div>
    )
  }

}

export default App;
