import React, { Component } from 'react'
import Icon from './Icon'
import Elements from '../Elements'

class Header extends Component {

  static Title ({className = '', ...otherProps}) {
    return (
      <div className={`card-header-title ${className}`} {...otherProps}/>
    )
  }

  static Icon ({type, ...otherProps}) {
    return (
      <div className="card-header-icon" aria-label="more options">
        <span className="icon"><Icon type={type} {...otherProps}/></span>
      </div>
    )
  }

  render () {
    const {className = '', ...otherProps} = this.props
    return (<header className={`card-header ${className}`} {...otherProps}/>)
  }
}

export default class Card extends Component {

  static Image ({className = '', ...otherProps}) {
    return (
      <div className={`card-image ${className}`}>
        <Elements.Image {...otherProps}/>
      </div>
    )
  }

  static Header = Header

  static Content ({className = '', ...otherProps}) {
    return (
      <div className={`card-content ${className}`} {...otherProps}/>
    )
  }

  static Footer ({className = '', ...otherProps}) {
    return (
      <footer className={`card-footer ${className}`} {...otherProps}/>
    )
  }

  render () {
    const {className = '', ...otherProps} = this.props
    return (
      <div className={`card ${className}`} {...otherProps}/>
    )
  }
}