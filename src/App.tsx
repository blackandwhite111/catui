import React from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/button'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
       <Button disabled> Hello </Button>
       <Button className={'aaa bbb'} onClick={e=>console.log(e.target)}> Hello </Button>
       <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Hello Primary </Button>
       <Button btnType={ButtonType.Danger} size={ButtonSize.Small}> Hello Danger </Button>
       <Button btnType={ButtonType.Link} href='http://www.baidu.com' target={'_self'}> Baidu Link </Button>
       <Button btnType={ButtonType.Link} href='http://www.baidu.com' disabled> Baidu Link </Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
