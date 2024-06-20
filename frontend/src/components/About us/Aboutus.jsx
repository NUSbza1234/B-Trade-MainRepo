import React from 'react'
import './Aboutus.css'
import image from '../../assets/image.jpg'

const Aboutus = () => {
  return (
    <div>
        <body>

            <div class="heading">
                <h1>About us Team 6556</h1>
                <p>Hello! We are Year 1 BZA Majors, looking to help students to step into the world of investing! Investing might seem daunting at first
                    and that is why we decided to create ß-Trade to allow people to start on their investing journey by simulating their trades with their paper accounts on our platform.
                </p>
            </div>
            <div class="container">
                <section class="about">

                    <div class="about-image">
                        <img src={image} alt='Image'/>
                    </div>

                    <div class="about-content">
                        <h2>Features that our platform offers</h2>
                        <ul>
                            <li>Stock Price Prediction</li>
                            <li>Live news feed about finance and trends</li>
                            <li>Price indicator to buy or sell</li>
                            <li>To-do/Reminders list for you to remember important market events etc.</li>
                        </ul>
                        {/*<p>some text oernononqonoinceicnoeinoincowen</p>*/}
                        <a href="" class="read-more">Visit our GitHub</a>
                    </div>

                </section>
            </div>

        </body>
    </div>
  )
}

export default Aboutus