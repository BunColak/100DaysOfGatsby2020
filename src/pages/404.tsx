import React from 'react'
import { PageProps } from "gatsby"

const NotFoundPage = (props: PageProps) => {
  return (
    <div>
      <p>
        You wanted {props.path}.
      </p>
      <p>
        This route is no good
      </p>
    </div>
  )
}

export default NotFoundPage
