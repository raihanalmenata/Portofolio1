import './index.css'

const List = ({ exRes, golKeys }) => (
        <div className="list">
            {exRes.map(e => (
                <div className={'card'}>
                    <div className='header'>
                        {
                            golKeys.includes(e.selected.toLowerCase()) &&
                                <p className='golden-label'>Golden</p>
                        }
                        <h1 className="selected">{e.selected}
                        </h1>
                    </div>
                    {e.unselected.length > 0 &&
                        <ul className="unselected">
                            {e.unselected.map((e, index) =>
                                <li key={index}>
                                        <p className='bullet-char'>&bull;</p>
                                        <p className='phrase'>
                                            {
                                                golKeys.includes(e.toLowerCase()) &&
                                                    <span className='golden-label'>G</span>
                                            }
                                            {e}   
                                        </p>
                                </li>
                            )}
                        </ul>
                    }
                </div>
            ))}
        </div>
    )


export default List