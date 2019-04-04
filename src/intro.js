import React from 'react';

class Info extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <section className="intro" id="intro">
                    <div className="container">
                        <h1 style={{ textAlign: "center", color: "#fff", paddingTop: "20px" }}>
                            Why we must begin to care the kid's food
					</h1>
                        <h2 style={{ textAlign: "center", color: "#fff" }}>
                            ONE-QUARTER of children OVERWEIGHT or OBESE!
					</h2>
                        <div className="container" style={{ filter: "alpha(opacity=0)" }} >
                            <div className="col-md-6" style={{ width: "50%" }}>
                                <p style={{ color: "#fff" }}>
                                    In 2014-15, 20% children aged 2-4 were overwither or obese - 11% were overwight, 9% were obese.
							</p>
                                <p style={{ color: "#fff", paddingTop: "20px" }}>
                                    Aboout 1 in 4(27%) children aged 5-17 were overwieght or obese - 20% were overwight, and 7% were boese.
							</p>
                                <p style={{ color: "#fff", paddingTop: "20px" }}>
                                    Unfortunateley，the trend is become worse and worese.
							</p>
                            </div>
                            <div className="col-md-6" style={{ width: "50%" }}>
                                <div className="img">
                                    <img src="../images/Visuals/dataview1.png" alt="Data" /></div>
                            </div>
                        </div>
                        <div className="container" style={{ filter: "alpha(opacity=0)", paddingTop: "20px" }} >
                            <div className="col-md-6" style={{ width: "50%" }}>
                                <div className="img">
                                    <img src="../images/Visuals/dataview2.png" alt="Data" />
                                </div>
                            </div>
                            <div className="col-md-6" style={{ width: "50%" }}>
                                <p style={{ color: "#fff", paddingTop: "20px" }}>
                                    The table is the left is the Australia’s ranking among 35 OECD(countries of the Organisation for Economic Co-operation and Development (OECD) countries for selected health measures.
						</p>
                                <p style={{ color: "#fff", paddingTop: "20px" }}>
                                    Australia ranked in the worst third of OECD countries for obesity among people aged 15 and over
						</p>
                            </div>
                        </div>

                        <h1 style={{ textAlign: "center", color: "#fff", paddingTop: "20px" }}>
                            The common things you may not have awareness!
				</h1>
                        <h2 style={{ textAlign: "center", color: "#fff" }}>
                            Why your kids refuse to eat?
				</h2>
                        <div className="container" style={{ filter: "alpha(opacity=0)" }}>
                            <div className="col-md-6" style={{ width: "50%" }}>
                                <h1 style={{ textAlign: "center", color: "#fff" }}>
                                    The Sensory Connection
						</h1>
                                <p style={{ color: "#fff" }}>
                                    We decide what we’re going to eat based on our senses.
						</p>
                                <p style={{ textAlign: "center", color: "#fff", paddingTop: "20px" }}>
                                    Even us grown-ups, if you think about it, we decide what we’re going to eat based on how it looks, how it smells, how it feels, how it tastes.
						</p>
                                <p style={{ textAlign: "center", color: "#fff", paddingTop: "20px" }}>
                                    However , for children, there’s no avoiding that eating is a very sensory-rich experience!
						</p>
                                <p style={{ textAlign: "center", color: "#fff", paddingTop: "20px" }}>
                                    The junk food, have the good smell, good taste, easy to catch children's attetntion.
						</p>
                            </div>
                            <div className="col-md-6" style={{ width: "50%" }}>
                                <div className="img">
                                    <img src="../images/Visuals/dataview3.png" alt="Data" />
                                </div>
                            </div>
                        </div>
                        <div className="container" style={{ filter: "alpha(opacity=0)", paddingTop: "20px" }}>
                            <div className="col-md-6" style={{ width: "50%" }}>
                                <div className="img">
                                    <img src="../images/Visuals/dataview4.png" alt="Data" />
                                </div>
                            </div>
                            <div className="col-md-6" style={{ width: "50%" }}>
                                <h1 style={{ textAlign: "center", color: "#fff", paddingTop: "20px" }}>
                                    Obesity in childhood leads to obesity in adulthood!
					</h1>
                                <p style={{ color: "#fff", paddingTop: "20px" }}>
                                    Overweight or obese children are more likely to remain obese as adolescents and become overweight or obese adults.
					</p>
                                <p style={{ color: "#fff", paddingTop: "20px" }}>
                                    About 80 per cent of obese adolescents will become obese adults
					</p>
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