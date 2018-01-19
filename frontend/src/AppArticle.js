import React from 'react';

function AppArticle(props) {
  return (
    <div className="App-article" id="article-start">
      <h3 className="App-article-title">
        <a className="no-underline" href="https://www.savetheinternet.com/net-neutrality-what-you-need-know-now">
          Net Neutrality <span className="stars">{props.rate}</span>
        </a>
      </h3>

      <div className="date">{props.date}</div>

      <p className="App-article-first">
        When you go online you have certain expectations. You expect to be connected to whatever website you want. You expect that your cable or phone company isn’t messing with the data and is connecting you to all websites, applications and content you choose. You expect to be in control of your internet experience.
        When you use the internet you expect Net Neutrality.
      </p>
      <p>
        Net Neutrality is the basic principle that prohibits internet service providers like AT&T, Comcast and Verizon from speeding up, slowing down or blocking any content, applications or websites you want to use. Net Neutrality is the way that the internet has always worked.
        In 2015, millions of activists pressured the Federal Communications Commission to adopt historic Net Neutrality rules that keep the internet free and open — allowing people to share and access information of their choosing without interference.
        But right now the internet is in peril.
      </p>
      <p>
        On Dec. 14, 2017, the FCC’s Republican majority approved Chairman Ajit Pai’s plan to gut the Net Neutrality protections.
        A former Verizon lawyer and a Trump appointee, Pai ignored the widespread outcry against his plan from millions of people, lawmakers, companies andco public-interest groups.
        We can’t let Pai have the last word on this — which is why we’re calling on Congress to use a “resolution of disapproval” to overturn the FCC’s vote to dismantle the Net Neutrality rules.
        Urge lawmakers to reverse the FCC vote today.
      </p>
      <p>
        What is Net Neutrality?
        Net Neutrality is the internet’s guiding principle: It preserves our right to communicate freely online. Net Neutrality means an internet that enables and protects free speech. It means that ISPs should provide us with open networks — and shouldn’t block or discriminate against any applications or content that ride over those networks. Just as your phone company shouldn’t decide who you call and what you say on that call, your ISP shouldn’t interfere with the content you view or post online.
        The internet without Net Neutrality isn’t really the internet.
      </p>
      <p>
        What will happen to the internet now?
        Without the Net Neutrality rules, companies like AT&T, Comcast and Verizon will be able to call all the shots and decide which websites, content and applications succeed.
        These companies can now slow down their competitors’ content or block political opinions they disagree with. They can charge extra fees to the few content companies that can afford to pay for preferential treatment — relegating everyone else to a slower tier of service.
        The consequences will be particularly devastating for marginalized communities media outlets have misrepresented or failed to serve. People of color, the LGBTQ community, indigenous peoples and religious minorities in the United States rely on the open internet to organize, access economic and educational opportunities, and fight back against systemic discrimination.
        Without Net Neutrality, how will activists be able to fight oppression? What will happen to social movements like the Movement for Black Lives? How will the next disruptive technology, business or company emerge if internet service providers let only incumbents succeed?
      </p>
    </div>
  );
}

export default AppArticle;
