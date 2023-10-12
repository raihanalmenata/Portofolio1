import './index.css'

const ResultHeader = ({ title }) => {

    const word1 = title.split(' ')[0]
    const word2 = title.split(' ').slice(1).join(' ')

    return (
        <div className="result-header">
            <h4 className="result-header-title col">
                <span className="word-1">{word1}</span>
                <span className="word-2">{word2}</span>
            </h4>
        </div>
    )
}

export default ResultHeader