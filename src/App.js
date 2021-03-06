import React, {Component} from 'react';
import './App.css';
import {Card, CardBody, Input} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: '0',
            flow: {
              html: ''
            },
            editorStore: {
            }
        };
    }

    handleChange = (e) => {
        this.setState({
            step: e.target.value
        });
    };

    load = (keys, clb, clbErr) => {
        const res = {...this.state.editorStore};
        clb(res); // might be called inside some async method
// In case of errors...
// clbErr('Went something wrong');
    };

    store = (data, clb, clbErr) => {
        this.setState({editorStore: {...data}});
        console.log(clb);
        clb(); // might be called inside some async method
    };

    render() {
        return (
            <div className="App">
                <Input value={this.state.step} onChange={this.handleChange} type='select'>
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                </Input>

                <Card>
                    <CardBody>
                        {this.state.step === '0' && <Tab1/>}
                        {this.state.step === '1' && <Tab2/>}
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default App;
