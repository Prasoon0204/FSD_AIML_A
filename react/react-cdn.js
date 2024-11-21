const parent = document.getElementById("root");
const element = React.createElement("h1",{},"This is new heading");
const ele1 = React.createElement("h2",{},"shopping Cart");
const item1 = React.createElement("li",{},"Item-1");
const item2 = React.createElement("li",{},"Item-2");
const list = React.createElement("ul",{},item1,item2);
const para = <p>This is new Paragraph</p>
const root = ReactDOM.createRoot(parent);
root.render([element,ele1,item1,item2,para]);