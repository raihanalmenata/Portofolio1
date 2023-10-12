import './index.css'

const Button = ({ onClick, buttonText }) => (
    <button className='button' onClick={onClick}>{ buttonText }</button>
)

export default Button