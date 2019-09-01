import React from 'react'
import {Route} from 'react-router-dom'

import {useGitHubContents} from 'hooks/useGitHubContents'

import RepositoryForm from 'components/RepositoryForm'

import Browse from './resources/Browse'
import Add from './resources/Add'

const Resources = () => {
  const [
    contents,
    setOwner,
    setRepository,
    isFetching,
  ] = useGitHubContents(
    'db.json'
  )

  return (
    <>
      <RepositoryForm
        {
          ...{
            setOwner,
            setRepository,
            isFetching,
          }
        }
        />
      <Route
        path="/resources"
        render={
          (props) => (
            <>
              <Browse
                {
                  ...{
                    ...props,
                    contents,
                  }
                }
                />
              <Add
                {...props}
                />
            </>
          )
        }
      />
    </>
  )
}

export default Resources
