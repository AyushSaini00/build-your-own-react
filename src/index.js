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

const ayush = {
  createElement,
  render
};

const element = ayush.createElement(
  "div",
  null,
  ayush.createElement("h1", { className: "hello" }, "Hello World")
);

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

function render(element, container) {
  const dom =
    element.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type);

  const isProperty = (key) => key !== "children";
  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = element.props[name];
    });

  element.props.children.forEach((child) => render(child, dom));

  container.appendChild(dom);
}

// the node where to append the element
const container = document.getElementById("root");
ayush.render(element, container);

// creating the h1 node element
//const node = document.createElement(element.type);

// assigning element props to the h1 node
//node["title"] = element.props.title;

// creates a text node
//const text = document.createTextNode("");

//text["nodeValue"] = element.props.children;

// appending text to node & then appending node to container
//node.appendChild(text);
//container.appendChild(node);
