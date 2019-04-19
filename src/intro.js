import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Info1 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <section className="intro" id="intro" style={{ backgroundAttachment: 'fixed' }}>
                    <div className="container">
                        <h1 style={{ textAlign: "center", color: "#fff", paddingTop: "20px" }}>
                            Why we must begin to care about a healthy diet for our children
					</h1>
                        <h2 style={{ textAlign: "center", color: "#fff" }}>
                            Childhood Obesity is on the rise!
					</h2>
                        <div className="container" style={{ filter: "alpha(opacity=0)" }} >
                            <div className='row'>
                                <div className="col-md-6">                                

                                    <p style={{ color: "#fff" }}>
                                        In 2014-15, 20% children aged 2-4 were either overweight or obese.
                                        The rate of obesity increases with age and girls are affected the most.
                                </p>
                                <p style={{ color: "#fff" }}>
                                Children are considered over weight if their Body Mass Index (BMI) is in the range 25 to 29.9. 
                                Children with BMI 30 or greater are considered obese
                                </p>
                                    <p style={{ color: "#fff", paddingTop: "20px" }}>
                                        About 1 in 4 (27%) children aged 5-17 were either overwieght or obese.

                                </p>
                                    <p style={{ color: "#fff", paddingTop: "20px" }}>
                                        80% of overweight and obese children retain their problems as they grow up as adults.
                                </p>
                                <p style={{ color: "#fff", paddingTop: "20px" }}>
                                        The trend of childhood obesity has consistently incresed through the years.
						        </p>
                                    <p style={{ color: "#fff", paddingTop: "20px" }}>
                                        In 2017, about 25-30% of children aged 2-11 suffered from obesity or overweight issues.
						        </p>
                                </div>
                                <div className="col-md-6" >
                                    <Carousel autoPlay showThumbs={false} showArrows={true} infiniteLoop={true}>
                                        <div>
                                            <img className='img-responsive' src="../images/Visuals/bmi-dist.jpg" alt="Data" />
                                            {/* <p className='legend'> BMI of Children in different age groups</p> */}
                                        </div>
                                        <div>
                                            <img className='img-responsive' src="../images/Visuals/obesity-trend.jpg" alt="Data" />
                                            {/* <p className='legend'> Obesity Trend</p> */}
                                        </div>
                                    </Carousel>
                                    
                                </div>
                            </div>

                        </div>                        


                        <h2 style={{ textAlign: "center", color: "#fff", paddingTop: '20px', marginBottom: '0' }}>
                            Food and eating habits are major contributors for obesity
    				    </h2>
                        <div className="container" style={{ filter: "alpha(opacity=0)", paddingTop: "20px" }} >
                            <div className='row'>
                                <div className="col-md-6" >

                                    <p style={{ color: "#fff", paddingTop: "20px" }}>
                                    World Health Organization recommends at least 4 servings or 340g of vegetables for daily consumption for 4-8 yaer old children.
						</p>
                                    <p style={{ color: "#fff", paddingTop: "20px" }}>
                                        Data from Australian Bureau of Statistics indicates nearly 96% of children aged 4-8 years are not getting the minimum recommended intake of
                                        vegetables on a daily basis.
						</p>
                                    <p style={{ color: "#fff", paddingTop: "20px" }}>
                                        About 15% of children get less than half a serving of vegetables every day.
                                        This is only 1/8th of the recommended intake.
						</p>
                                    <p style={{ color: "#fff", paddingTop: "20px" }}>
                                        Healthy foods are being replaced by energy-dense foods that are high in fat.
						</p>
                                </div>
                                <div className="col-md-6" >
                                    <img className='img-responsive' src="../images/Visuals/consumption-of-foods.jpg" alt="Data" />
                                </div>
                            </div>
                        </div>

                        <h2 style={{ textAlign: 'center', paddingTop: '20px' }}>
                            Why does my child refuse healthy food? 
                        </h2>
                        <h2 style={{ textAlign: "center", color: "#fff" }}>
                            The Sensory Connection
						</h2>
                        <div className="container" style={{ filter: "alpha(opacity=0)" }}>
                            <div className='row'>
                                <div className="col-md-6" >

                                    <p style={{ color: "#fff" }}>
                                        We decide what we’re going to eat based on our senses.
                                        Our choice of foods is based on how it looks, how it smells, how it feels and how it tastes.
           </p>
                                    <p style={{ color: "#fff", paddingTop: "20px" }}>
                                        Junk foods are energy dense. They trigger an increased appetite in children due
                                        to our primal insticts to survive. With everyday exposure to junk foods, kids develop
                                        an aversion to more healthy alternatives like vegetables.
           </p>
                                    <p style={{ color: "#fff", paddingTop: "20px" }}>
                                        Children tend to continue eating junk food even after they feel full.
                                        The reward children feel after eating junk foods is a huge motivation for them to demand
                                        unhealthy foods insted of healthy foods.
           </p>
                                </div>
                                <div className="col-md-6">
                                    <img className='img-responsive' src="../images/Visuals/dataview3.png" alt="Data" />
                                </div>
                            </div>
                        </div>

                        <h2 style={{textAlign:'center'}}>
                            Can our child learn to like healthy foods? 
                        </h2>
                        <div className="container" style={{ filter: "alpha(opacity=0)", paddingTop: "20px" }}>
                            <div className='row'>
                                <div className="col-md-6" >                                    
                                        <img className='img-responsive' src="../images/Visuals/dataview4.png" alt="Data" />
                                </div>
                                <div className="col-md-6" >
                                    <p style={{ color: "#fff" }}>
                                        Children can educated to choose healthy foods by increased rewards for eating them.
                                        If external incentives apart from the satisfaction of eating healthy foods outweigh the
                                        satisfaction of eating unhealthy foods, children voluntarily choose to eat healthy.
					</p>
                                    <p style={{ color: "#fff", paddingTop: "20px" }}>
                                        Games are a very good rewarding mechanisms that can be used to correct and shape children's
                                        behaviour.
					</p>
                                    <p style={{ color: "#fff", paddingTop: "20px" }}>
                                        We have designed 3 interesting video games, which teach kids to identify healthy and unhealthy
                                        foods. The games provide rewards for choosing to eat healthy foods and penalise for eating
                                        unhealthy foods. This provides the incentive to slowly reduce the ressistance in children to eating healthy
                                        foods.
					</p>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12 text-center'>
                                <a href='/games' className='learn-more-btn'>
                                    Jump to Game Zone
                            </a>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        );
    }
    componentDidMount() {
        let nav = document.getElementById('navBar');
        // console.log('mount', nav);
        nav.hidden = false;
        let home = document.getElementById('home');
        home.classList.remove('active');
        let intro = document.getElementById('intro');
        intro.classList.add('active');
        let team = document.getElementById('team');
        team.classList.remove('active');
        let game = document.getElementById('games');
        game.classList.remove('active');

        let width = window.screen.availWidth;
        let height = window.screen.availHeight;        
        if (height>width)
            alert('For the best browsing experience, please rotate your device');
        window.addEventListener('resize', function(){
            width = window.screen.availWidth;
            height = window.screen.availHeight;
            if (height>width)
            alert('For the best browsing experience, please rotate your device')});
            

    }

}

export { Info1 }