// @flow

import React from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import newsletters from 'grapesjs-preset-newsletter'
import 'grapesjs-preset-newsletter/dist/grapesjs-preset-newsletter.css';

type Props = {
    template: String,
    load: Function,
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

    componentDidMount() {
        const editor = grapesjs.init({
            container: '#gjs',
            plugins: ['gjs-preset-newsletter'],
            style: '.txt-red{color: red}',
            forceClass: false,
            storageManager: {
                type: null,
                autoload: 1
            },
        });

        this.setState({editor});
        editor.on('load', (some, argument) => {
            console.log('editor load');
            // do something
        })

        let storageManager = editor.StorageManager;
        storageManager.add('store', {
            load: this.props.load,
            store: this.props.store
        });

        storageManager.setCurrent('store');
        editor.load();
    }


    render() {
        return (
            <div>
                <button onClick={() => {
                    console.log(this.state.editor.getHtml());
                    console.log(this.state.editor.StorageManager);
                }}>Export html
                </button>
                <div id='gjs'/>
            </div>
        );
    }


    componentWillUnmount() {
        if (this.state.editor) {
            this.state.editor.destroy();
        }
    }


}

export default GrapesEditor;

