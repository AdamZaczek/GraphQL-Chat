import React from 'react'

const AddChannel = () => {
  const handleKeyUp = (evt) => {
    if (evt.keyCode === 13) {
      console.log(evt.target.value)
      evt.target.value = ''
    }
  }
  return (
    <input
      type="text"
      placeholder="New channel"
      onKeyUp={handleKeyUp}
    />
  )
}
export default AddChannel
