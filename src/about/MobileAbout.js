import React from 'react'
import '../styles/About.scss';
import NameAudio from '../name audio/NameAudio';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
 
      
  export default function MobileAbout() {


    return(
      <div>
        <div className="entireContainer">
            <div className="outer-about-wrapping-container">
              <Card
                className="inner-about-wrapping-container"
                id="inner-about-wrapping-container-right"
              >
                <CardContent>
                  <h3>Dear Visitor,</h3>
                  <p>
                    How you doing? I'm <NameAudio />. If you made it this far... yay for me! Some
                    things you should know about me before reaching out. I like:{" "}
                  </p>
                  <ul>
                    <li>Frontend and backend.</li>
                    <li>CSS and APIs.</li>
                    <li>All things AWS (I'm certified!).</li>
                    <li>
                      Contributing to a tech blog. (Feel free to check it out{" "}
                      <a
                        href="https://allmaddesigns.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        id='blog-link'
                      >
                        here!
                      </a>
                      ){" "}
                    </li>
                    <li>Automation.</li>
                  </ul>
                  <p>
                    Can I add french fries, action movies, and sci-fi books to
                    that list? I'm asking for a friend...
                  </p>
                  <p>
                    Most importantly, I love a challenge because it leads to
                    growth.{" "}
                  </p>

                  <p>
                    So if you are looking for a funny, smart, hard-working, team
                    player to join your organization...stay, click some things,
                    send me a message using a carrier pigeon and I'll get back
                    to you.
                  </p>
                  <p>
                    Disclaimer: I am not responsible if you choose to send a
                    message using a carrier pigeon. It is 2022 okay?
                  </p>

                  <p>Sincerely,</p>
                  <p>Mykol</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
    )
}