import React, { Component } from "react";
import Counter from "../components/Counter";

const counters = [
  {
    id: 1,
    count: 0,
    steps: 2,
  },
  {
    id: 2,
    count: 0,
    steps: 4,
  },
  {
    id: 3,
    count: 0,
    steps: 6,
  },
  {
    id: 4,
    count: 0,
    steps: 8,
  },
];
export default class Counters extends Component {
  state = {
    counters,
  };

  increment = (steps, id) => {
      this.setState((prevState) => {
          return {
              ...prevState,
              counters: prevState.counters.map((counter) => {
                  if (counter.id === id) {
                      return { ...counter, count: counter.count + steps };
                    }
                    return counter;
                }),
            };
        });
    };
    

  decrement = (steps, id) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        counters: prevState.counters.map((counter) => {
          if (counter.id === id) {
            return { ...counter, count: counter.count - steps };
          }
          return counter;
        }),
      };
    });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.counters.map((counter) => {
            return (
              <Counter
                key={counter.id}
                {...counter}
                increment={this.increment}
                decrement={this.decrement}
                total={this.total}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
