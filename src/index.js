import "./styles.css";

// the sort of object that react.createElement return (essentially)
const element = {
  type: "h1",
  props: {
    title: "foo",
    children: "Hello world"
  }
};

// the node where to append the element
const container = document.getElementById("root");

// creating the h1 node element
const node = document.createElement(element.type);

// assigning element props to the h1 node
node["title"] = element.props.title;

// creates a text node
const text = document.createTextNode("");

text["nodeValue"] = element.props.children;

// appending text to node & then appending node to container
node.appendChild(text);
container.appendChild(node);
