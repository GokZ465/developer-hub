import React from "react";

console.clear();

const messages = [
  {
    author: "loading",
    body: "...",
    timeout: 0,
  },
  {
    author: "bot",
    body: "Hello",
    timeout: 800,
  },
  {
    author: "bot",
    body: "Please enter your search tags ",
    timeout: 1500,
  },
  {
    author: "bot",
    body: "to view responses from our API",
    timeout: 3000,
  },
  {
    author: "bot",
    body: "Go ahead",
    timeout: 4000,
  },
];

const responses = [];

const Message = (props) => {
  const { author, body } = props.data;

  let finalBody;

  if (Array.isArray(body)) {
    finalBody = body.map((item, index) => {
      return (
        <a href={item.url} className="c-chat__action" key={index}>
          {item.text}
        </a>
      );
    });
  } else {
    finalBody = <div className="c-chat__message">{body}</div>;
  }

  return (
    <li className={"c-chat__item c-chat__item--" + author}>{finalBody}</li>
  );
};

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      responses: 0,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
    this.mockReply = this.mockReply.bind(this);
  }

  componentDidMount() {
    this.demo();
  }

  demo() {
    this.setState({
      messages: [],
      responses: 0,
    });

    messages.map((item, index) =>
      setTimeout(() => this.addMessage(item), item.timeout)
    );

    setTimeout(() => {
      this.setState({
        messages: this.state.messages.slice(1, this.state.messages.length),
      });
    }, 700);
  }

  addMessage(item) {
    this.setState({
      messages: [...this.state.messages, item],
    });

    setTimeout(() => {
      const items = document.querySelectorAll("li");
      const lastItem = items[items.length - 1];
      document.querySelector(".c-chat__list").scrollTop =
        lastItem.offsetTop + lastItem.style.height;
    }, 100);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.addMessage({
      author: "human",
      body: e.target.querySelector("input").value,
    });

    this.mockReply();

    e.target.reset();
  }

  mockReply() {
    let response;

    if (this.state.responses === 0) {
      response = responses[this.state.responses];
    } else {
      if (responses[this.state.responses])
        response = responses[this.state.responses];
    }

    if (response) {
      this.setState({
        responses: this.state.responses + 1,
      });

      if (Array.isArray(response)) {
        response.map((item, index) =>
          setTimeout(
            () => this.addMessage({ author: "bot", body: item }),
            600 + 500 * index
          )
        );
      } else {
        setTimeout(
          () => this.addMessage({ author: "bot", body: response }),
          600
        );
      }
    }
  }

  render() {
    let cssClass = ["c-chat"];

    return (
      <div className={cssClass.join(" ")}>
        <ul className="c-chat__list">
          {this.state.messages.map((message, index) => (
            <Message key={index} data={message} />
          ))}
        </ul>
      </div>
    );
  }
}
export default Chat;

//ReactDOM.render(<Chat />, document.getElementById("chat"));
