import React, { Component } from 'react';

class App extends Component {
  render() {

    // var = 함수단위, const, let = 블록단위 scope
    const name = 'react';
    return (
      <div>
        {/* 주석은 이렇게 */}
        <div>
            hello {name}!
        </div>
        {/* 삼항 연산자 */}
        {
          1 + 1 !== 2
            ? (<div> 맞아요!</div>)
            : (<div> 틀려요!</div>)
        }
        {/* AND 연산자 */}
        {
          1+1 === 2 && (<div>맞아요!</div>)
        }
        {/* IF 문 */}
        {
          (function() {
            if (value === 1) return (<div>하나</div>);
            if (value === 2) return (<div>둘</div>);
            if (value === 3) return (<div>셋</div>);
          })()
        }
      </div>
    );
  }
}



export default App;
