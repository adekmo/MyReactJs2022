import React from 'react'
import MultipleReturns from './tutorial/Conditional-Rendering/MultipleReturns'
import ShortCircuit from './tutorial/Conditional-Rendering/ShortCircuit'
import ShowHide from './tutorial/Conditional-Rendering/ShowHide'
import FetchExample from './tutorial/Cutom-Hook/FetchExample'
import ControlInput from './tutorial/Forms/ControlInput'
import MultipleInput from './tutorial/Forms/MultipleInput'
import IndexMemo from './tutorial/Memo/IndexMemo'
import PropDrilling from './tutorial/prop-drilling/PropDrilling'
import AdvanceReact from './tutorial/PropTypes/AdvanceReact'
import IndexRoute from './tutorial/Router/IndexRoute'
import ContextApi from './tutorial/useContext/ContextApi'
import Basic from './tutorial/useEffect/Basic'
import CleanupFunction from './tutorial/useEffect/CleanupFunction'
import FetchData from './tutorial/useEffect/FetchData'
import Index from './tutorial/useReducer/Index'
import Refactor from './tutorial/useReducer/Refactor'
import RemoveItem from './tutorial/useReducer/RemoveItem'
import UseRefBasic from './tutorial/useRef/UseRefBasic'
import Array from './tutorial/useState/Array'
import Counter from './tutorial/useState/Counter'
import ErrorExample from './tutorial/useState/ErrorExample'
import FinalCase from './tutorial/useState/FinalCase'
import Object from './tutorial/useState/Object'

const App2 = () => {
    return (
        <div>
            <div className="useState">
                {/* <ErrorExample /> */}
                {/* <Array /> */}
                {/* <Object /> */}
                {/* <Counter /> */}
                {/* <FinalCase /> */}
            </div>

            <div className="useEffect">
                {/* <h2>UseEffect</h2> */}
                {/* <Basic /> */}
                {/* <CleanupFunction /> */}
                {/* <FetchData /> */}
            </div>

            <div className="ConditionalRendering">
                {/* <h2>Condtional Rendering</h2> */}
                {/* <MultipleReturns /> */}
                {/* <ShortCircuit /> */}
                {/* <ShowHide /> */}
            </div>

            <div className="Form">
                {/* <h2>Form</h2> */}
                {/* <ControlInput /> */}
                {/* <MultipleInput /> */}
            </div>

            <div className="useRef">
                {/* <h2>UseRef</h2>
                <UseRefBasic /> */}
            </div>

            <div className="useReducer">
                {/* <Index /> */}
                {/* <Refactor /> */}
                {/* <RemoveItem /> */}
                
            </div>

            <div className="PropDrilling">
                {/* <PropDrilling /> */}
            </div>

            <div className="useContext">
                {/* <ContextApi /> */}
            </div>

            <div className="usefetch">
                {/* <FetchExample /> */}
            </div>

            <div className="propTypes">
                {/* <AdvanceReact /> */}
            </div>

            <div className="reactRouter">
                {/* <IndexRoute /> */}
            </div>

            <div className="reactMemo">
                <IndexMemo />
            </div>
        </div>
    )
}

export default App2
