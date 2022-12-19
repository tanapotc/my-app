import '../styles/body.css'
import React, {useEffect} from "react";
const Blogs = () => { 
  useEffect(() => {
    document.title = 'Blogs';
  }, []);
  return <>
  <section className="card">
    <h1>Blogs</h1>
  </section>
  </>
};

export default Blogs;