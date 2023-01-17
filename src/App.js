import logo from './logo.svg';
import './App.css';
import ActionCard from './ui-components/ActionCard';
import amplifyLogo from "./images/amplify-logo.svg";

const alertFun = () => { 
  alert("Hello World");
}

const overrrideProps = {
  "image": {
      src: amplifyLogo
  },
  "Button":{
      onClick: alertFun
  },
  "Information about this product":{
    children: "This has changed"
  }    
}

function App() {
  return (
    <>
    <div className="App">
      <ActionCard overrides={overrrideProps}></ActionCard>
    </div>
    </>
  );
}

export default App;
