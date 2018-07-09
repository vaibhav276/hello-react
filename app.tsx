import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return(
            <h4>Hello, {this.props.name}</h4>
        );
    }
}

ReactDOM.render(
    <App name="World" />,
    document.getElementById('root')
);
