import React, { Component } from 'react';
import Wrapper from "./components/wrapper";
import ButtonAppBar from "./components/navbar";
import CenteredGrid from "./components/pictures";
import Footer from "./components/footer";
import images from "./components/images/images.js"

class App extends Component {
  state = {
    images,
    score: 0,
    highscore: 0,
    message: "Click on a picture to start the game."
  }
  handleClick = alt => {
    const index = images.findIndex(image => image.alt === alt)
    if (this.state.images[index].clicked) {
      this.setState({ score: 0, message: "That is wrong!" })
      this.reorder()

      for (let i = 0; i < this.state.images.length; i++) {
        let image = Object.assign(this.state.images)
        image[i].clicked = false
        this.setState({ image })
      }

    } else {
      const newScore = this.state.score + 1
      this.setState({ score: newScore, message: "Correct!" })
      let image = Object.assign(this.state.images)
      image[index].clicked = true
      this.setState({ image })
      this.reorder()

      if (newScore > this.state.highscore) {
        this.setState({ highscore: newScore })
      }
      console.log(newScore)
    }
  }

  reorder = () => {
    let random = this.state.images.sort((a, b) => { return 0.5 - Math.random() })
    this.setState({ images: random })
  }

  render() {
    return (
      <Wrapper>
        <ButtonAppBar message={this.state.message} 
        score={this.state.score} 
        highscore={this.state.highscore} />
        <div className="container" >
          <div className="row" id="imageHolder">
            {this.state.images.map(image => (
              <CenteredGrid
                onClick={this.handleClick}
                alt={image.alt}
                src={image.src}
              />
            ))}
          </div>
        </div>
        <Footer />
      </Wrapper>
    )
  }
}

export default App;

