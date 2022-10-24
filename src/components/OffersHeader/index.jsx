import React from 'react'

export default function OffersHeader({title, description}) {
  return (
    <div className="row">
      <div className="col-lg-12">
          <div className="breadcrumb-inner text-center insta-comments">
            <h1 className="title theme-gradient h2">{title}</h1>
            <p>{description}</p>
          </div>
      </div>
    </div>
  )
}
