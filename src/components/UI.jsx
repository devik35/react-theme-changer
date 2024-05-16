import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default class UI extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div className="w-full h-screen flex items-center justify-center" style={{ backgroundColor: theme.bg, color: theme.syntax }}>
        <section className="flex flex-col items-center justify-center shadow-xl p-20">
          <h3 className="underline">Hello folks</h3>
          <p>This is a just a simple theme changer.</p>
          <p>Using a Context API</p>
          <p>First day using class components :)</p>
        </section>
      </div>
    );
  }
}
