import hljs from 'highlight.js';
import React from 'react';

class Highlight extends React.Component {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.setEl = el => {
            this.el = el;
        }, _temp;
    }

    componentDidMount() {
        this.highlightCode();
    }

    componentDidUpdate() {
        this.highlightCode();
    }

    highlightCode() {
        const nodes = this.el.querySelectorAll('pre code');

        for (let i = 0; i < nodes.length; i++) {
            hljs.highlightBlock(nodes[i]);
        }
    }

    render() {
        const { children, className, element: Element, innerHTML } = this.props;
        const props = { ref: this.setEl, className };

        if (innerHTML) {
            props.dangerouslySetInnerHTML = { __html: children };
            if (Element) {
                return React.createElement(Element, props);
            }
            return React.createElement('div', props);
        }

        if (Element) {
            return React.createElement(
                Element,
                props,
                children
            );
        }
        return React.createElement(
            'pre',
            { ref: this.setEl },
            React.createElement(
                'code',
                { className: className },
                children
            )
        );
    }
}

Highlight.defaultProps = {
    innerHTML: false,
    className: null,
    element: null
};

export default Highlight;