import './index.css'

const Section = ({ children, style, className }) => (
    <div className={'section' + (className ? ' ' + className : '')} style={style}>
        {children}
    </div>
)

export default Section