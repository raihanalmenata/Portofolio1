import './index.css'

const TextField = ({ inputName, value, storage, style }) => (
    <div className="text-field-wrapper col" style={style}>
        <label htmlFor={ inputName } className="text-field-label"> { inputName } </label>
        <textarea name={ inputName } id={ inputName } className="text-field" value={value} onChange={ e => storage(e.target.value)}></textarea>
    </div>
)

export default TextField