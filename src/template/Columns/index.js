import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export function Row ({children, gapLess, multiLine, border, color/*white|black|light|dark|white-bis|white-ter|grey-lighter|grey-light|grey|grey-dark|grey-darker|black-ter|black-bis|danger|warning|success|info|link|primary*/, className}) {

  return (
    <div className={
      classNames(
        'columns',
        className,
        {
          'is-gapless': gapLess,
          'is-bordered': border,
          'is-multiline': multiLine,
          [`has-background-${color}`]: color,
        },
      )} children={children}/>
  )
}

export function Col ({size/*2-11*/, children, border, offset/*2-11*/, color/*white|black|light|dark|white-bis|white-ter|grey-lighter|grey-light|grey|grey-dark|grey-darker|black-ter|black-bis|danger|warning|success|info|link|primary*/, className}) {
  return (
    // As the grid can be divided into 12 columns
    <div className={
      classNames(
        'column',
        className,
        {
          [`is-${size}`]: size,
          'is-bordered': border,
          [`has-background-${color}`]: color,
          [`is-offset-${offset}`]: offset,
        },
      )} children={children}/>
  )
}

Row.propTypes = {
  gapLess: PropTypes.bool,
  multiLine: PropTypes.bool,
  border: PropTypes.bool,
  color: PropTypes.oneOf([
    'white',
    'black',
    'light',
    'dark',
    'dark',
    'white-bis',
    'white-ter',
    'grey-lighter',
    'grey-light',
    'grey',
    'grey-dark',
    'grey-darker',
    'black-ter',
    'black-bis',
    'danger',
    'warning',
    'success',
    'info',
    'link',
    'primary']),
  className: PropTypes.string,
}

Col.propTypes = {
  size: PropTypes.number,
  offset: PropTypes.number,
  border: PropTypes.bool,
  color: PropTypes.oneOf([
    'white',
    'black',
    'light',
    'dark',
    'dark',
    'white-bis',
    'white-ter',
    'grey-lighter',
    'grey-light',
    'grey',
    'grey-dark',
    'grey-darker',
    'black-ter',
    'black-bis',
    'danger',
    'warning',
    'success',
    'info',
    'link',
    'primary']),
  className: PropTypes.string,
}

export default null
