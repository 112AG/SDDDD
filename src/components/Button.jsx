import React from 'react'
import { Link } from 'react-router-dom'

function Button({btn, link}) {
  return (
    <div>
        <Link to={link}
              className="
              relative
              bg-[#F4C520]
              text-black
              font-semibold
              px-5
              py-2
              rounded-md
              shadow-[4px_4px_0_#1AD079]
              hover:shadow-[2px_2px_0_#1AD079]
              active:shadow-none
              transition-all
              text-sm
              sm:text-base
            "
            >
              {btn}
            </Link>
    </div>
  )
}

export default Button