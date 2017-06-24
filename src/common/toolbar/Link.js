import React from 'react'
import PropTypes from 'prop-types'

function Link(props) {
  const { name, params, options, router, navigateTo } = props

  const href = router.buildUrl(name, params)
  const onClick = (evt) => {
    evt.preventDefault()
    navigateTo(name, params, options)
  }
  const className = router.isActive(name, params) ? 'active' : ''

  return <a { ...{ href, onClick, className } }>{ props.children }</a>
}

Link.propTypes = {
  name: PropTypes.string.isRequired,
  params: PropTypes.object,
  options: PropTypes.object,
  router: PropTypes.object,
  navigateTo: PropTypes.func.isRequired,
  children: PropTypes.any
}

Link.defaultProps = {
  params: {},
  options: {}
}

export default Link
