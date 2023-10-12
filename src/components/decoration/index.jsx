import './index.css'

/**
 * Styling Util and Constant
 */
const borderType = 'solid'
const borderWidth = '3px'
const offsetLength = '-1px'

const Decoration = ({top, right, bottom, left, color = 'black'}) => {

    /**
     * Dynamic Styles
     */
    const borderStyle = borderType + ' ' + borderWidth + ' ' + color
    const style = {
        borderTop: top ? borderStyle : undefined,
        borderRight: right ? borderStyle : undefined,
        borderBottom: bottom ? borderStyle : undefined,
        borderLeft: left ? borderStyle : undefined,
        top: top ? offsetLength : undefined,
        right: right ? offsetLength : undefined,
        bottom: bottom ? offsetLength : undefined,
        left: left ? offsetLength : undefined,
    }

    return (
        <div 
            className="decor"
            style={style}
        />
    )
}

export default Decoration