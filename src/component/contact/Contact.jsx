import React from "react";

const Contact = () => {
    
 return (
    <>
    <div className="container background">
      <h2 style={{align:"center", display:"flex", alignItems:"center", justifyContent:"center", paddingBottom:"20px"}}>Feel Free to Contact us</h2>
       
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29216.078460753735!2d90.35839516861374!3d23.74702966862438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf51e7aee4ff%3A0x21c88cabfebf5243!2sIBN%20Sina%20Specialized%20Hospital!5e0!3m2!1sen!2sbd!4v1673772004712!5m2!1sen!2sbd"width="90%"
        height="450"
        style={{ border: 0, display:"flex", margin:"auto" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
    </iframe>
    
      <div style={{ marginTop: "6rem",textAlign: "center"}}>
        <div style={{ maxWidth:"50rem", margin:"auto"}}>
          <form
            action="https://formspree.io/f/xgedgjkr"
            method="POST"
            style={{display:"flex",flexDirection:"column",gap:"3rem"}}>
            <input
              type="text"
              name="username"
              placeholder=" username"
              autoComplete="off"
              required
              style={{padding:"10px"}}
            />

            <input
              type="email"
              name=" Email"
              placeholder=" Email"
              autoComplete="off"
              required
              style={{padding:"10px"}}
            />

            <textarea
              name="message"
              placeholder=" Write your Comment......"
              cols="30"
              rows="6"
              autoComplete="off"
              required></textarea>

            <input type="submit" value="send" style={{padding:"10px", fontSize:"18px", background:"green", color:"white"}}/>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default Contact;
