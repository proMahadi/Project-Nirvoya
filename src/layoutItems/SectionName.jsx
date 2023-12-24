import React from 'react'

const SectionName = ({title,className}) => {
  return (
    <div>
        <h4 className={`font-pops font-medium text-[#383838] text-[26px] ${className}`}>{title}</h4>
    </div>
  )
}

export default SectionName