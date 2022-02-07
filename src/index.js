import "./styles.css";

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child : createTextElement(child)
      )
    }
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: []
    }
  };
}

const myReact = {
  createElement
};

const element = myReact.createElement("h1", { id: "foo" }, "HELLO WORLD");

/** @jsx myReact.createElement */
// const element = <h1>Hello world</h1>;

// the sort of object that react.createElement return (essentially)
// const element = {
//   type: "h1",
//   props: {
//     title: "foo",
//     children: "Hello world"
//   }
// };

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
