/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { AccordionNav } from '@theme-ui/sidenav';
import { graphql, Link, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Header from "./header";
// import "./layout.css";
// import { jsx } from 'theme-ui'
import Links from './SideNavLinks.mdx';




const Layout = ({ props, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />  
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        
          <Links
            {...props}
            components={{
              wrapper: AccordionNav,
              a: props => <Link to={props.href}>{props.children}</Link>
            }}
          />
         
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
