// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      packagedetails: allPackageDetailsJson{
        edges {
          node {
            name
          }
        }
    }
      destinationdetails: allDestinationJson{
        edges {
          node {
            destinationName
          }
        }
    }
    }
  `)

  if (result.errors) {
    return
  }

  result.data.packagedetails.edges.forEach(elem => {
    actions.createPage({
      path: "/PackageDetails/"+ elem.node.name,
      component: require.resolve("./src/pages/PackageDetails.js"),
      context: {PackageID: elem.node.name}

    })
  })

  result.data.destinationdetails.edges.forEach(elem => {
    actions.createPage({
      path: "/DestinationDetails/"+ elem.node.destinationName,
      component: require.resolve("./src/pages/DestinationDetails.js"),
      context: {DestinationName: elem.node.destinationName}

    })
  })
}
