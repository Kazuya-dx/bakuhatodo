import React from 'react';

interface AppProps { }

interface AppState {
    num: number;
    text: string;
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            num: 0,
            text: 'ReactApp を TypeScript を用いて作成しています。',
        };
    }
    addNumber() {
        let num = this.state.num + 1;
        this.setState({
            num: num,
        })
    }
    reduceNumber() {
        let num = this.state.num - 1;
        this.setState({
            num: num,
        })
    }
    render() {
        return (
            <div>
                <h1>React + TypeScript</h1>
                <div><b>{this.state.text}</b></div>

                <p>現在のカウント: {this.state.num} </p>
                <button onClick={() => this.addNumber()}>+1</button>
                <button onClick={() => this.reduceNumber()}>-1</button>
            </div>
        )
    }
}

export default App;