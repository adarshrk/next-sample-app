import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import Head from 'next/head'

const Index = (props) => (
  <Layout>
    <Head>
        <title>My page title</title>
        <script type="application/ld+json">
              {JSON.stringify([{
      "type": "Organization",
      "name": "Realtor.com",
      "url": "https://www.realtor.com",
      "logo": "https://www.realtor.com/realtor-com.png",
      "sameAs": ["https://www.facebook.com/realtor.com",
          "https://twitter.com/REALTORdotcom",
          "https://www.youtube.com/user/RealtorDotCom",
          "https://plus.google.com/+REALTORdotcom",
          "https://www.pinterest.com/realtordotcom/",
          "https://www.linkedin.com/company/realtor-com",
          "https://en.wikipedia.org/wiki/Realtor.com",
          "https://www.wikidata.org/wiki/Q19866742"
      ]
  },
  {
      "type": "WebSite",
      "name": "Realtor.com",
      "url": "https://www.realtor.com"
  }
  ])}
        </script>
    </Head>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({show}) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
    h1, a {
        font-family: "Arial";
      }
    
      ul {
        padding: 0;
      }
    
      li {
        list-style: none;
        margin: 5px 0;
      }
    
      a {
        text-decoration: none;
        color: blue;
      }
    
      a:hover {
        opacity: 0.6;
      }
    `}
  
</style>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index