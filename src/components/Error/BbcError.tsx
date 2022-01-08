import React from 'react'
// style
import './BbcError.scss'
// Constants
import {error} from "../../services/contants/errorContent";

export interface ErrorInterface {
  text: string,
  onConfirm: () => void
}

export function BbcError(props: ErrorInterface) {
  return <p className="bbc-error">{props.text} <button onClick={() => props.onConfirm()}>{error.close}</button></p>
}