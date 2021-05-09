import React, { Component } from 'react'
import Main from '../MainComponent/Main'
import {connect} from "react-redux";
import {onPageSetAction,} from "../ReduxStore/actions"

class HomePage extends Component {
    componentDidMount() {
        this.props.onPageSet(1)
    }

    render() {
        return (
            <>
              <Main/>  
            </>
        )
    }
}

const mapDispachToProps=(dispach)=>{
    return{
      onPageSet:(page_no)=>dispach(onPageSetAction(page_no)),
    }
  }
  
export default connect(null,mapDispachToProps)(HomePage)
