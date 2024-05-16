import React, { Component, createContext } from 'react';
import * as FaIcons from "react-icons/fa";

export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {
  state = {
    isLightTheme: false,
    light: {
      syntax: "#555",
      ui: "#ddd",
      bg: "#d1ddfd",
      icon: <FaIcons.FaMoon />,
    },
    dark: {
      syntax: "#ddd",
      ui: "#333",
      bg: "#555",
      icon: <FaIcons.FaSun />,
    },
  };

  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
