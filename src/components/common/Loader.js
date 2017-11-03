/* @flow */
import * as React from 'react'
import Spinner from 'react-spinkit'

type Props = {}

function Loader({  }: Props) {
    return (
        <div>
            <Spinner name="wave" color="gray" />
        </div>
    )
}

Loader.defaultProps = {}

export default Loader
