import React, { Suspense } from 'react'

function Setting() {
  return (
    <Suspense fallback="loading">
      <div>Setting</div>
    </Suspense>
  )
}

export default Setting