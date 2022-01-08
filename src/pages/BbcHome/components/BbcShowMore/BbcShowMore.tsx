import React from 'react'
// style
import './BbcShowMore.scss'
// Types & constants
import {app} from "../../../../services/contants/textContent";

interface BbcShowMoreInterface {
  onShowMoreClick: () => void
  isLoading: boolean
}

export function BbcShowMore(props: BbcShowMoreInterface) {
  return <div className="bbc-showmore">
    {props.isLoading ? app.loading : <button onClick={() => props.onShowMoreClick()}>{app.show_more}</button>}
  </div>
}