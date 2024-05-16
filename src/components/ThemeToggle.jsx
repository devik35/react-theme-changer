import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default class ThemeToggle extends Component {
    static contextType = ThemeContext;
  render() {
    const {isLightTheme, light, dark, toggleTheme} = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div className='absolute top-8 left-8'>
        <button style={{color: theme.syntax}} onClick={toggleTheme} className='text-lg'>{theme.icon}</button>
      </div>
    )
  }
}
