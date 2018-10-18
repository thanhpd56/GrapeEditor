// @flow

import React from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-newsletter/dist/grapesjs-preset-newsletter.css';

type Props = {
    template: String,
    load:Function,
    store: Function
}

class GrapesEditor extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            editor: null
        };
    }

    shouldComponentUpdate() {
        return false;
    }


    exportHtml = () => {

    };

    componentDidMount() {
        const editor = grapesjs.init({
            container: '#gjs',
            plugins: ['gjs-preset-newsletter'],
            components: this.props.template,
            style: '.txt-red{color: red}',
            storageManager: {
                type: null
            },
        });
        this.setState({
            editor: editor
        }, () => {
            console.log(this.state.editor);
        });
    }


    render() {
        return (
            <div>
                <button onClick={() => {
                    console.log(this.state.editor.getHtml());
                    console.log(this.state.editor.StorageManage);
                }}>Export html
                </button>
                <div id='gjs'/>
            </div>
        );
    }


    componentWillUnmount() {
        if (this.state.editor) {
            console.log('unmount and destroy editor');
            this.state.editor.destroy();
        }
    }


}

export default GrapesEditor;

