import React from 'react';
import {Routes, Route, Link,Outlet} from 'react-router-dom';

function AboutPage() {
  return(
    <>
      <h1>About Page</h1>
      <ul>
        <li><Link to='contacts'>Our Contacts</Link></li>
        <li> <Link to='team'>Our team</Link></li>
      </ul>
      {/*<Routes>*/}
      {/*  <Route path="contacts" element={<p>Our contact</p>} />*/}
      {/*  <Route path="team" element={<p>Our team</p>} />*/}
      {/*</Routes>*/}
      <Outlet />
    </>
  )
};

export default AboutPage;