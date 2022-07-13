import * as React from 'react';

// type TTestProps = {
//     pTest: string
// }
//
// type TTestState = {
//     test: string
// }

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: 'test123',
        };
    }

    render() {
        return (
            <div>
                <div>{this.props.pTest}</div>
                <div>{this.state.test}</div>
            </div>
        );
    }
}

export default Test;
