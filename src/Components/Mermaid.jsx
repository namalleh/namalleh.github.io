// https://codesandbox.io/p/sandbox/react-with-mermaid-ex9f7?file=%2Fsrc%2FMermaid.js%3A1%2C1-64%2C1
import React from "react";
import mermaid from "mermaid";

mermaid.initialize({
    startOnLoad: true,
    theme: "dark",
    securityLevel: "loose",
    sequence: {
        useMaxWidth: true,
        // Mermaid handles Firefox a little different.
        // For some reason, it doesn't attach font sizes to the labels in Firefox.
        // If we specify the documented defaults, font sizes are written to the labels in Firefox.
        // noteFontWeight: "14px",
        // actorFontSize: "14px",
        // messageFontSize: "16px"
    },
    // themeCSS: `
    // g.classGroup rect {
    //   fill: #282a36;
    //   stroke: #6272a4;
    // }
    // g.classGroup text {
    //   fill: #f8f8f2;
    // }
    // g.classGroup line {
    //   stroke: #f8f8f2;
    //   stroke-width: 0.5;
    // }
    // .classLabel .box {
    //   stroke: #21222c;
    //   stroke-width: 3;
    //   fill: #21222c;
    //   opacity: 1;
    // }
    // .classLabel .label {
    //   fill: #f1fa8c;
    // }
    // .relation {
    //   stroke: #ff79c6;
    //   stroke-width: 1;
    // }
    // #compositionStart, #compositionEnd {
    //   fill: #bd93f9;
    //   stroke: #bd93f9;
    //   stroke-width: 1;
    // }
    // #aggregationEnd, #aggregationStart {
    //   fill: #21222c;
    //   stroke: #50fa7b;
    //   stroke-width: 1;
    // }
    // #dependencyStart, #dependencyEnd {
    //   fill: #f8f8f2;
    //   stroke: #00bcd4;
    //   stroke-width: 1;
    // }
    // #extensionStart, #extensionEnd {
    //   fill: #f8f8f2;
    //   stroke: #f8f8f2;
    //   stroke-width: 1;
    // }`,

    fontFamily: "Fira Code"
});

export default class Mermaid extends React.Component {
    componentDidMount() {
        mermaid.contentLoaded();
    }
    render() {
        return <div className="mermaid">{this.props.chart}</div>;
    }
}
