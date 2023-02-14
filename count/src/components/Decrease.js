import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { decreaseCounter } from '../redux/actions/counterActions'

function Decreace(props) {
    return (
        <div><button onClick={e => props.dispatch(decreaseCounter())}>1 azalt</button></div>
    )
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(decreaseCounter, dispatch)
    }
}
export default connect(mapDispatchToProps)(Decreace)