import React from 'react';

class Info extends React.Component {
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
                                        In 2014-15, 20% children aged 2-4 were either overwither or obese.
                                        The rate of obesity increases with age and girls are affected the most
                                </p>
                                    <p style={{ color: "#fff", paddingTop: "20px" }}>
                                        Aboout 1 in 4(27%) children aged 5-17 were overwieght or obese.

                                </p>
                                    <p style={{ color: "#fff", paddingTop: "20px" }}>
                                        80% of overweight/obese children retain their problems as they grow up as adults.
                                </p>
                                </div>
                                <div className="col-md-6" >
                                    <img className='img-responsive' style={{maxHeight:'480px'}} src="../images/Visuals/obesity-proportion.jpg" alt="Data" />
                                </div>
                            </div>

                        </div>
                        <div className="container" style={{ filter: "alpha(opacity=0)", paddingTop: "20px" }} >
                            <div className='row'>
                                <div className="col-md-6" >
                                    <img className='img-responsive' src="../images/Visuals/obesity-trend.jpg" alt="Data" />
                                </div>
                                <div className="col-md-6" >
                                    <p style={{ color: "#fff", paddingTop: "20px" }}>
                                        The trend of childhood obesity has consistently incresed through the years.
						</p>
                                    <p style={{ color: "#fff", paddingTop: "20px" }}>
                                        In 2017, about 25-30% of children aged 2-11 suffered from obesity or overweight issues.
						</p>
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
                                        World Health Organization recommends atleast 2 servings of vegetables for daily consuption.
						</p>
                                    <p style={{ color: "#fff", paddingTop: "20px" }}>
                                        Data from Australian Bureau of Statistics indicates nearly half of children aged 4-8 years are not getting the minimum recommended intake of
                                        vegetables on a daily basis.
						</p>
                                    <p style={{ color: "#fff", paddingTop: "20px" }}>
                                        About 15% of children get less than half a serving of vegetables every day.
                                        This is only a quarter of the recommended intake.
						</p>
                                    <p style={{ color: "#fff", paddingTop: "20px" }}>
                                        Healthy foods are being replaced by energy-dense foods that are high in fat.
						</p>
                                </div>
                                <div className="col-md-6" >
                                    <img className='img-responsive' src="../images/Visuals/Veg-consumption.jpg" alt="Data" />
                                </div>
                            </div>
                        </div>

                        <h2 style={{ textAlign: 'center', paddingTop: '20px' }}>
                            Why does my child refuse healthy food? !!
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

                        <h2>
                            Can our child learn to like healthy foods? !!
                        </h2>
                        <div className="container" style={{ filter: "alpha(opacity=0)", paddingTop: "20px" }}>
                            <div className='row'>
                                <div className="col-md-6" >
                                    <div className="img">
                                        <img src="../images/Visuals/dataview4.png" alt="Data" />
                                    </div>
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
        console.log('mount', nav);
        nav.hidden = false;
        let home = document.getElementById('home');
        home.classList.remove('active');
        let intro = document.getElementById('intro');
        intro.classList.add('active');
        let team = document.getElementById('team');
        team.classList.remove('active');
        let game = document.getElementById('games');
        game.classList.remove('active');
    }

}

export { Info }