import React, {Component} from 'react';
import './App.css';
import GrapesEditor from './GrapesEditor';
import {Input} from 'reactstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: '0',
            editorStore: {}
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
        clb(); // might be called inside some async method
    };

    render() {
        return (
            <div className="App">
                <Input value={this.state.step} onChange={this.handleChange} type='select'>
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                </Input>
                {this.state.step === '0' && <div>Hello</div>}
                {this.state.step === '1' && <GrapesEditor store={this.store} load={this.load}
                    template={'<div class="c1896" style="box-sizing: border-box; padding: 10px;">Phan Dang Thanh 123\n' +
                    '</div>\n' +
                    '<div class="c1970" style="box-sizing: border-box; padding: 10px;">Insert your text asdfsdf\n' +
                    '</div>'}/>}
            </div>
        );
    }
}

export default App;
