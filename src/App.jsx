import { useState } from 'react'

import './App.css'

import Section from './components/section'

import ExtractionHeader from './components/extraction-header'
import TextInput from './components/text-input'
import TextField from './components/text-field'
import Button from './components/button'

import ResultHeader from './components/result-header'
import List from './components/list'
import Decoration from './components/decoration'

/**
 * Util Functions
 */
const HTTPReq = async (body, url, method) => await fetch(url, {
    'method': method,
    'mode': 'cors',
    'headers': {
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify(body)
  }
).catch(err => console.log(err))
const splitAndTrim = (string, delimiter) => string.toLowerCase().split(delimiter).map(e => e.trim())


function App() {

  /**
   * Component Styling Constants
   */
  const FORM_SECTION_MAX_WIDTH = '523px'
  const RESULT_SECTION_MAX_WIDTH = '249px'
  
  /**
   * Component States
   */
  const [title, setTitle] = useState('')
  const [abstract, setAbstract] = useState('')
  const [result, setResult] = useState([])
  const [goldenKeys, setGoldenKeys] = useState([])
  
  
  /**
   * Extraction Constant
   */
  const extractionData = {
    'title': title, 
    'abstract': abstract
  }

  /**
   * TopicRank Extraction Constants and Util
   */
  const topicrankExtractionServiceURL = 'http://127.0.0.1:5000/extract/topicrank'
  const topicrankExtractionServiceHTTPMethod = 'POST'
  const getTopicrankExtractionResult = async() => {
    const extractionResult = await HTTPReq(extractionData, topicrankExtractionServiceURL, topicrankExtractionServiceHTTPMethod).catch(err => console.log(err))
    setResult(await extractionResult.json())
  }

  return (
    <div id='app'>
      
      <Decoration left top color='#0074C8'/>
      {/* Form Section */}
      <Section style={{maxWidth: FORM_SECTION_MAX_WIDTH}}>
        <ExtractionHeader/>
        <TextInput inputName={'Document Title'} storage={setTitle} style={{marginBottom: '11px'}}/>
        <TextField inputName={'Document Abstract'} storage={setAbstract} style={{marginBottom: '11px'}}/>
        <TextInput inputName={'Golden Keys'} 
          storage={(value) => setGoldenKeys(splitAndTrim(value, ','))} 
          sublabel='*Comma Seperated Value' style={{marginBottom: '8px'}}
        />
        <Button onClick={getTopicrankExtractionResult} buttonText='Ekstrak'/>
      </Section>

      {/* Result Section */}
      <Section style={{maxWidth: RESULT_SECTION_MAX_WIDTH}} className='result-section'>        
      <ResultHeader title={'Extraction Results'}/>
      <List exRes={result} golKeys={goldenKeys}/>
      </Section>
      <Decoration right bottom color='#FFCF25'/>
      
    </div>
  )
}

export default App
