import React from 'react'

export default function ReserveSlug({params}:{params:{slug:string}}) {
  return (
    <div>Reserve {params.slug}</div>
  )
}
