import React from 'react';
import { connect } from 'react-redux';
import { decCount, incCount, resCount } from './redux/action';

function Navbar({count, name, data, incFun, decFun, resFun}) {
  return (
    <div>{count }
    <div>
        <button onClick={() => incFun()}>INCCCC</button>
    </div>
    <div>
        <button onClick={() => decFun()}>DECCCC</button>
    </div>
    <div>
        <button onClick={() => resFun()}>RESSSS</button>
    </div>
    {name}
    <button>{data}</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        count : state.count,
        name : state.name,
        data : state.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        incFun : (count) => dispatch(incCount(count)),
        decFun : (count) => dispatch(decCount(count)),
        resFun : (count) => dispatch(resCount(count))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);