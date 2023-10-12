import './index.css'

const TextInput = ({ inputName, value, sublabel, storage, style }) => (
    <div className="text-input-wrapper col" style={style}>
        <label className='text-input-label' htmlFor={inputName}>{inputName}</label>
        {
            sublabel && 
            <label className='text-input-sublabel' htmlFor={inputName}>{sublabel}</label>
        }
        <input type="text" className='text-input' name={inputName} id={inputName} value={value} onChange={ e => storage(e.target.value) }/>
    </div>
)

export default TextInput