import React, { useState } from 'react'
import classNames from 'classnames'

import style from "./styles.module.css"
import i18next from 'i18next'

const SwitchBtn = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
     setIsChecked(!isChecked)
     if(isChecked){
        i18next.changeLanguage('en')
      }
      else{
        i18next.changeLanguage('es')
      }
    }

  return (
    <>
      <label className={style.switchLabel}>
        <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only'
        />
        <span className={classNames('label',style.navItem)}>
            EN
        </span>
        <span className={classNames('slider',style.switchColor)}>
          <span className={classNames('dot',style.switchDot, isChecked ? 'translate-x-[28px]' : '')}></span>
        </span>
        <span className={classNames('label',style.navItem)}>
            ES
        </span>
      </label>
    </>
  )
}
export default SwitchBtn;