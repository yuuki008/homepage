import React from 'react'
import Image from 'next/image'

const Screen = () => {

  return (
    <div
      style={{
        width: '100%',
        margin: '20px auto',
        borderRadius: "20px"
      }}>
      <Image className="screen-image" src={"/images/js.jpg"} width={1000} height={700} />
    </div>
  )
}

export default Screen