
export const Contact = () => {
 return (
   <section className="contact-section" 
   style={{
     textAlign:"center"
    
   }}
   >
     <h2 >Get In Touch</h2>
     <form className="contact-form" style={{
     
        color:"blue",
     height:"400px"
     }}>
       Name
       :<input type="text" placeholder="Your Name" /><br />
       E-Mail:<input type="email" placeholder="Email Address" /><br />
       masage:<input placeholder="your massage"style={{
         width:"150px",
         height:"80px"
       }}></input><br />
       <button type="submit">Send Message</button>
     </form>
   </section>
 );
};