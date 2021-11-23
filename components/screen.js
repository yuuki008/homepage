import React from 'react'
import Image from 'next/image'

const Screen = () => {

  return (
    <div
      style={{
        width: '80%',
        margin: '20px auto',
        // background: '#f4c62d',
        borderRadius: "20px"
      }}>
      <Image className="screen-image" src={"/images/js.jpg"} width={1000} height={700} />
    </div>
  )
}

export default Screen