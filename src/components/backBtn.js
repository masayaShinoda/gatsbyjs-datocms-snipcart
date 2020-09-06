import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

const BackButton = props => {
  return (
    <Link
      to={props.destination}
      style={{ display: `flex`, alignItems: `center`, fontSize: `2.5rem` }}
    >
      <FontAwesomeIcon
        size="xs"
        icon={faArrowLeft}
        style={{ marginRight: `.8rem`, maxWidth: `2.5rem` }}
      />
      Back
    </Link>
  )
}

export default BackButton
