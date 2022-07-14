import * as React from 'react';

type TAb = {
    a: string
    b: string
}

type TTestProps = {
    pTest: string
}

type TTestState = {
    test: string
    list: TAb[]
}

class Test extends React.Component<TTestProps, TTestState> {
    constructor(props: TTestProps) {
        super(props);
        this.state = {
            test: 'test123',
            list: [{ a: 'a1', b: 'b1' }, { a: 'a2', b: 'b2' }]
        };
    }

    render() {
        const { pTest } = this.props;
        const { test, list } = this.state;
        return (
            <div>
                <div>{pTest}</div>
                <div>{test}</div>
                <div>
                    {list.map((item, index) => (<div key={index}>
                        {item.a}-{item.b}
                    </div>))}
                </div>
            </div>
        );
    }
}

export default Test;
