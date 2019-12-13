import React from 'react'

const Form = (props) => {
  return (
    <form onSubmit={props.getWeather}>
      <input
        type='text'
        name='city'
        spellCheck='false'
        autoComplete='off'
        placeholder='city'
      ></input>
      <button>Submit</button>
    </form>
  )
}

export default Form