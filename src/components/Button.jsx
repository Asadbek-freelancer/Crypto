import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

const Button = () => {
  const { t } = useTranslation();
  return (
    <div>
        <Link to="/dashboard">
        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-lg transition-all hover:scale-105 z-30 cursor-pointer">
       {t(" Get Started")}
      </button>
      </Link>  
    </div>
  )
}

export default Button