import './App.css';
import Greet from './Components/Greet'
import react, {Component} from 'react'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Message from './Components/Message'
import Counter from './Components/Counter'
class AppComp extends Component {
  render(){
    return(
      <div>
        {/* <Greet></Greet>*/}
        {/* <Welcome></Welcome>*/}
        {/* <Hello></Hello> */}

        {/*Functional Component*/}
        {/*<Greet name="AAAA" heroName="aaaa">
          <p>This is para of A</p>
        </Greet>
        <Greet name="BBBB" heroName="bbbb">
          <p>This is para of B</p>
          <button>Submit</button>
        </Greet>
        <Greet name="CCCC" heroName="cccc">
        </Greet>*/}

        {/*Class Component*/}
        {/*<Welcome name="XXXX" heroName = "xxxx"></Welcome>
        <Welcome name="YYYY" heroName = "yyyy"></Welcome>
        <Welcome name="ZZZZ" heroName = "zzzz"></Welcome>
        <Message></Message>*/}

        <Counter></Counter>
      </div>
    )
  }
}

export default AppComp;
