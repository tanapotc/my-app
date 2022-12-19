import '../styles/body.css'
import React, {useEffect} from "react";
const Contact = () => {
  useEffect(() => {
    document.title = 'Contact';
  }, []);
  return <>
    <section className="card">
      <h1>Contact</h1>
    </section>
  </>
};

export default Contact;