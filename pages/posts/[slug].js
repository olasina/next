import Header from '../../components/Header'
import ContentWrapper from '../../components/ContentWrapper'

const URL = process.env.STRAPIBASEURL;

export async function getStaticPaths() {
  const fetchParams = {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `
      {
        blogposts{
          data{
            attributes{
              slug
            }
          }
        }
      }
      `
    })
  }
  const res = await fetch(`${URL}/graphql`, fetchParams);
  const posts = await res.json();


  const paths = posts.data.blogposts.data.map((post) => {
    return { params: { slug: post.attributes.slug } }
  })


  return {
    paths: paths,
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  const fetchParams = {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `
      {
        blogposts(filters: {
          slug: {
            eq: "${params.slug}"
          }}){
          data{
            attributes{
              title
              blogbody
              description
              slug
              splash {
                data {
                  attributes{
                    url
                  }
                }
              }
            }
          }
        }
      }
      `
    })
  } 
  const res = await fetch(`${URL}/graphql`, fetchParams);
  const {data} = await res.json();

  console.log(data.blogposts.data[0]);

  return {
    props: data.blogposts.data[0].attributes
  };
}


function Content({title,blogbody,splash}) {
  return (
    <ContentWrapper>
      <Header></Header>
       <h1>{title}</h1>
    </ContentWrapper>
  )
}

export default Content
