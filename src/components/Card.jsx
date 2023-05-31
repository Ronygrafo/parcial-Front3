/* eslint-disable react/prop-types */

import './Card.css'

const Card = ({nombre, perfil}) => {
  return (
    <div className='card'>
        <h1>{nombre}</h1>
        <h2>{perfil}</h2>
    </div>
  )
}
export default Card