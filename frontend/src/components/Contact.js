import React from 'react';
import './Contact.css';

export const Contact = () => {
    return (
        <section className="contact-section">
<h2 align="center">📢 Let's Connect!  </h2> <br/>
            <div className="social-icons">
                <a href="https://x.com/sium99122">
               <img src="https://img.shields.io/badge/TWITTER-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"/>     
                </a>
                <a href="https://www.instagram.com/nazmul_hasan_siam01/" >
                <img src="https://img.shields.io/badge/INSTAGRAM-E33275?style=for-the-badge&logo=instagram&logoColor=white"/>     
                </a>
                <a href="https://www.linkedin.com/in/siam69/">
                <img src="https://img.shields.io/badge/LINKEDIN-0361BF?style=for-the-badge&logo=linkedin&logoColor=white"/>     
                </a>
                <a href=" https://wa.me/qr/XLZH4MTU7Y36C1" >
                <img src="https://img.shields.io/badge/WHATSAPP-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
                </a>
                <a href="https://github.com/sium01" >
                    <img src="https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=github&logoColor=white"/>
                </a>
                <a href=" https://leetcode.com/u/siam01f/" >
                    <img src="https://img.shields.io/badge/LEETCODE-FFA116?style=for-the-badge&logo=leetcode&logoColor=white"/>
                </a>
                <a href="https://codeforces.com/profile/siam_01">
                  <img src="https://img.shields.io/badge/CODEFORCES-1F8ACB?style=for-the-badge&logo=codeforces&logoColor=white"/>  
                </a>
                <a href="https://www.hackerrank.com/profile/sohailhazarysiam" >
                <img src="https://img.shields.io/badge/HACKERRANK-2EC866?style=for-the-badge&logo=hackerrank&logoColor=white"/>    
                </a>
            </div>

 
            <br/>
            


            <h2>Get In Touch</h2>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Email Address" />
                <textarea placeholder="Your Message"></textarea> 
                <button type="submit">Send Message</button>
            </form>
            
        </section>
    );
};