import * as p5 from 'p5'

let s = (sk) => {
  sk.setup = () =>{

  }

  sk.draw = () =>{
    ellipse(50, 50, 80, 80);
  }
}

const P5 = new p5(s)