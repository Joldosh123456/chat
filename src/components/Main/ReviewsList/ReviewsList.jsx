import React from 'react'
import scss from './ReviewsList.module.scss'
import Image from 'next/image'

function ReviewsList({id, comment_stars, comment_name, comment, comment_date}) {
  return (
    <div className={scss.review}>
        <div className={scss.title}>
            <div>{comment_name}</div>
            <Image src={comment_stars} alt="comment_stars" />
        </div>
        <div className={scss.description}>
            {comment}
        </div>
        <div className={scss.date}>
            {comment_date}
        </div>
    </div>
  )
}

export default ReviewsList