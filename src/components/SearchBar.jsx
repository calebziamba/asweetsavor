/**
 * Searchbar component that redirects to archive with GET
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const SearchBar = () => {
  return (
    <Form className="mx-auto" style={{ maxWidth: "500px" }}>
      <InputGroup>
        <Form.Control
          placeholder="Search"
          aria-label="search bar"
          aria-describedby="search-button"
        />
        <Button variant="primary" id="search-button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      </InputGroup>
    </Form>
  )
}

export default SearchBar
