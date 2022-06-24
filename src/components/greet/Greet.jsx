import React from "react";
import { Timer } from "../timer/Timer";

export class Greet extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      timer: null,
      timer2: null,
      timer3: null,
      timer4: null,
    };
    this.anotherproperty = "somevalue";
    this.headingRef = React.createRef();
  }

  updateAnotherProperty = () => {
    console.log(this.headingRef.current);
    this.anotherproperty = "some another value";
    // this.state = { timer: new Date().toISOString() }
    this.setState({
      timer: new Date().toISOString(),
      timer2: new Date().toISOString(),
    });
  }

  render() {
    console.log("render method");
    return (
      <>
        <h1 ref={this.headingRef}>Hello {this.props.name}</h1>
        <Timer timer={this.state.timer} />
        <button onClick={this.updateAnotherProperty}>Click Me!</button>
      </>
    );
  }
}