import './SvgAnimation.css'

const SvgAnimation = () => {
  return (
    <svg className='svg-wrapper'>
      <text x="30%" y="50%" dy={'1rem'} textAnchor="middle" className='svg-animated-text'>
        M
      </text>
      <text x="50%" y="50%" dy={'1rem'} textAnchor="middle" className='svg-animated-text'>
        S
      </text>
      <text x="70%" y="50%" dy={'1rem'} textAnchor="middle" className='svg-animated-text'>
        M
      </text>
    </svg>
  )
}

export default SvgAnimation