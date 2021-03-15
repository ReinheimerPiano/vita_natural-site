import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
        <section className="is-flex is-vcentered is-hcentered has-background-white mx-6">
          <h1 className="title has-text-weight-bold my-6 has-background-white px-4" style={{color: "#808080", zIndex: "2"}}>Últimas Notícias</h1>
          <hr style={{width: "95vw",height: "2px",position: "absolute",background: "#808080",borderRadius: "50px",zIndex: "1"}}/>
        </section>
        <section className="is-flex is-vcentered is-hcentered has-background-white p-6">
          <div className="columns is-multiline px-3" style={{width: "100vw"}}>
            {posts &&
              posts.map(({ node: post }) => (
                <div className="is-parent has-background-light column is-3 p-0" key={post.id} style={{borderRadius: "50px"}}>
                  {post.frontmatter.featuredimage ? (
                        <div className="w-100 mb-3">
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: post.frontmatter.featuredimage,
                              alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                            }}
                          />
                        </div>
                      ) : null}
                  <article
                    className={`blog-list-item tile is-child box notification has-background-light ${
                      post.frontmatter.featuredpost ? 'is-featured' : ''
                    }`}
                  >
                    <header className="is-flex" style={{flexDirection:"column"}}>
                      
                    </header>
                      <p className="post-meta">
                        <Link
                          className="title has-text-gray is-size-4" style={{textDecoration: "none"}}
                          to={post.fields.slug}
                        >
                          {post.frontmatter.title}
                        </Link>
                      </p>
                    <p>
                      {post.excerpt}
                      <br />
                      <br />
                      <Link className="button is-dark is-rounded" to={post.fields.slug}>
                        Saiba Mais
                      </Link>
                    </p>
                  </article>
                </div>
              ))}
          </div>
        </section>
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
