import React from "react"
import  ContentLoader  from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={230}
    height={320}
    viewBox="0 0 230 320"
    backgroundColor="#006f94"
    foregroundColor="#05354d"
    {...props}
  >
    <rect x="142" y="393" rx="0" ry="0" width="56" height="0" /> 
    <circle cx="113" cy="76" r="64" /> 
    <rect x="63" y="165" rx="10" ry="10" width="101" height="33" /> 
    <rect x="92" y="207" rx="8" ry="8" width="44" height="26" /> 
    <rect x="64" y="248" rx="0" ry="0" width="100" height="37" /> 
    <rect x="118" y="289" rx="0" ry="0" width="5" height="0" />
  </ContentLoader>
)

export default MyLoader