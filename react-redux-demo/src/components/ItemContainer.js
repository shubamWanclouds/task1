import React from 'react'
import { connect } from 'react-redux'
import { buyCake,buyIceCream } from '../redux'

function ItemContainer(props) {
  return (
    <div>
      <h2>Item Count - {props.item}</h2>
      <button onClick={props.buyItem}>Buy Item</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake ? state.cakes.numOfCakes : state.iceCreams.numOfIceCreams
  return {
    item: itemState
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const itemDispatch = ownProps.cake ? () => dispatch(buyCake()): () => dispatch(buyIceCream())
  return {
    buyItem: itemDispatch
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
