import React from 'react'
import Create from './Create'

const Index = () => {
  return (
    <>
    <Create />
    </>
  )
}

Index.layout = (page) => <Layout children={page} />;
export default Index