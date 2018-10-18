import React from 'react'
import {Input} from "reactstrap";
import GrapesEditor from "./GrapesEditor";


export default class Tab2 extends React.Component{

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
            <div>
                <Input value={this.state.step} onChange={this.handleChange} type='select'>
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                </Input>
                {this.state.step === '0' && <div>Hello</div>}
                {this.state.step === '1' && <GrapesEditor store={this.store} load={this.load}
                                                          template={this.state.editorStore}/>}
            </div>
        );
    }
}