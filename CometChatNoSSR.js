import Link from 'next/link'

import React from 'react'

const CometChatNoSSR = () => {
  return (
    <div><link
    rel="stylesheet"
    href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
    integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
    crossOrigin="anonymous"
  />
  
  <CometChatUI />
  
  <Link href="add-friend" passHref>
    <button className="add-button">
      <i className="fas fa-plus"></i>
    </button>
  </Link></div>
  )
}

export default CometChatNoSSR

