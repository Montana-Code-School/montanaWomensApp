import React from 'react';
import Flexbox from 'flexbox-react';
import { Jumbotron, JumbotronCol, HoverRow, HoverCol, DrawerContainer, MenuItem, Navbar, NavItem, Nav, Button} from 'react-dynamic-ui';

    var borderTop = {
      borderTopStyle:'solid',
      borderColor:'#a44200',
      borderWidth: '1px'
    }

    var borderBottom = {
      borderBottomStyle: 'solid',
      borderColor: '#a44200',
      borderWidth: '1px'

    }

    var topBottom= {
      borderTopStyle: 'solid',
      borderBottomStyle: 'solid',
      borderColor: '#a44200',
      borderWidth: '1px'
    }

    var headerStyle = {
       textAlign: "center"
     }

     var imgStyle = {
       margin: "auto",
       paddingBottom: "20px",
       paddingTop: "10px"
     }

     var pStyle = {
       paddingRight: "10px",
      marginRight: "10px",
      fontSize: "18px"
     }

      class List extends React.Component {

      render (){
       return (
         <div className="col-lg-3 col-border">
         <h1 style={headerStyle}> {this.props.title} </h1>
          <img style={imgStyle} className="img-responsive" src={this.props.link} />
          <p style={pStyle}> {this.props.description} </p>
         </div>
       );

     }
   }

      class Rows extends React.Component {
        render (){
        return (
          <div>

          <ul className="row col-border" style={topBottom}>
          <List  title="IUD" link="css/img/iud.png"description="The IUD is a little, t-shaped piece of plastic that gets put in your uterus to mess with the way sperm can move and prevent them from fertilizing an egg. Sounds odd, but it works like a charm. IUDs offer years of protection—between three and twelve, depending on the type you get. And if you want to get pregnant, you can have the IUD removed at any time. There aretwo types: Hormonal and non-hormonal. In the U.S., there five IUDs: Mirena, ParaGard, Skyla, Liletta, and Kyleena."/>
          <List  title="Implant" link="css/img/implant.jpeg" description="The implant is a teeny-tiny rod that's inserted under the skin of your upper arm. It's so small, in fact, most people can't see it once it's inserted—which means it can be your little secret, if you're so inclined. The implant releases progestin, a hormone that keeps your ovaries from releasing eggs and thickens your cervical mucus—which helps block sperm from getting to the egg in the first place. It prevents pregnancy for up to four years. Not too shabby." />
          <List  title="The Shot" link="css/img/the_shot.jpg"description="The shot is just what it sounds like—a shot that keeps you from getting pregnant. Once you get it, your birth control is covered for three full months—there’s nothing else you have to do. Some people call the shot “Depo,” short for Depo-Provera. (Pronounced like Johnny Depp-oh.) The shot contains progestin, a hormone that prevents your ovaries from releasing eggs. It also thickens your cervical mucus, which helps block sperm from getting to the egg in the first place. Worth considering even if you're afraid of needles... Because what's a little prick compared to a pregnancy?" />
          <List  title="The Patch" link="css/img/patch.jpg"description="The patch is a thin, beige piece of plastic that looks like a square Band-Aid. It's a little less than two inches across, and comes in one—and only one—color. (Beige.) You stick the patch on your skin and it gives off hormones that prevent your ovaries from releasing eggs. The hormones also thicken your cervical mucus, which helps to block sperm from getting to the egg in the first place. The brand name Ortho Evra isn't being produced anymore so if you use the patch, ask for the generic, Xulane."/>
          </ul>
          <ul className="row col-border" style={borderBottom}>
          <List  title="The Pill" link="css/img/pills.jpg"description="'The Pill' is a pill. Some people call it 'oral contraception.' You take it once a day, at the same time every day. There are lots of different kinds of pills on the market, and new ones come out all the time. Most work by releasing hormones that keep your ovaries from releasing eggs. The hormones also thicken your cervical mucus, which helps to block sperm from getting to the egg in the first place."/>
          <List  title="Internal Condom" link="css/img/Female_Condom.png"description="An internal (a.k.a. female) condom is a pouch you insert into your vagina. It's not the prettiest thing in the world (it looks a bit like a floppy, clear elephant trunk) but it is a method that gives you lots of control. Internal condoms work the same way that condoms do, except that you wear one on the inside instead of sticking it on a penis. They keep the guy's sperm inside the condom and out of your vagina."/>
          <List  title="Sponge" link="css/img/sponge.png"description="The sponge is a round piece of white plastic foam with a little dimple on one side and a nylon loop across the top that looks like shoelace material. It's pretty small—just two inches across—and you insert it way up in your vagina before you have sex. The sponge works in two ways: It blocks your cervix to keep sperm from getting into your uterus, and it continuously releases spermicide. Think of it like a bouncer at the nightclub door to your uterus."/>
          <List  title="Diaphragm" link="css/img/diaphragm.jpg"description="A diaphragm is a shallow, dome-shaped cup made of silicone. (Honestly, it looks like Meg Griffin's hat on The Family Guy. Except it's only a few inches in diameter.) You insert the diaphragm into your vagina. Then it covers your cervix and keeps sperm out of your uterus. One super important thing to remember: For a diaphragm to work effectively, you need to use it with spermicide."/>
          </ul>
          <ul className="row" style={borderBottom}>
          <List  title="The Ring" link="css/img/ring.jpg"description="The ring (brand name: NuvaRing) is a small, bendable ring that you insert into your vagina. (It kind of looks like one of those jelly bracelets from the 80s, but it feels a tiny bit stiffer.) You leave it in place for three weeks at a time, then take it out for the fourth week. The ring works by giving off hormones that prevent your ovaries from releasing eggs. The hormones also thicken your cervical mucus, which helps to block sperm from getting to the egg in the first place."/>
          <List  title="Condom" link="css/img/condoms.jpg"description="Condoms are one of the most popular forms of birth control out there. They slip over the penis to prevent pregnancy and lower the risk of STIs by keeping sperm inside the condom and out of the vagina. (There are also internal condoms that go inside the vagina.) Condoms come in hundreds of shapes and sizes, with lube and without."/>
          <List  title="'Not Right Now'" link="css/img/no.png" description="'Not right now' is our way of saying 'no vaginal sex.' It’s a great method as far as effectiveness is concerned—if you use it 100% of the time, you’re guaranteed to not get pregnant. And if you’re avoiding sexual activity altogether, you’ll be safe from STIs too. But it does involve a whole lot of self-control."/>
          <List  title="Spermicide" link="css/img/spermicide.png"description="Spermicide describes a bunch of different creams, films, foams, gels, and suppositories that contain chemicals that stop sperm from moving. You insert it deep in your vagina, so it also keeps sperm from getting through your cervix and into your uterus."/>
          </ul>
          <ul className="row" style={borderBottom}>
          <List title="Cervical Cap" link="css/img/cervical_cap.png"description="A cervical cap is a silicone cup you insert in your vagina to cover your cervix and keep sperm out of your uterus. The 'cap' part of the name is pretty dead on—the thing looks like a little rubber sailor's hat, maybe an inch and a half wide and one inch high. There's only one brand of cervical cap available in the U.S. today, and it's jauntily named the FemCap. One super important thing to remember: You need to use a cervical cap with spermicide for it to be most effective." />
          <List title="Emergency Contraception" link="css/img/EC.png"description="Emergency Contraception (EC) can stop a pregnancy before it starts. (That means the EC pills are not the same as the abortion pill.) There are four types of EC to choose from and they all work up to 5 days (or 120 hours) after unprotected sex. But use it sooner rather than later to reduce the possibility of getting pregnant." />
          <List title="Withdrawal" link="css/img/exit.jpg"description="Withdrawal is the oldest form of birth control on the planet. There's not much to explain, really. The guy pulls out before he ejaculates. End of story. Some people call withdrawal the 'pull out method.' The key thing to remember is this: You've got to do it right—every single time—for withdrawal to be effective." />
          <List title="Fertility Awareness" link="css/img/awareness.jpg"description="Fertility awareness-based methods—or natural family planning—are all about tracking your menstrual cycle to determine the days that you can get pregnant. The tricky part is actually knowing when those days are. To do that, you'll need to pay very close attention to your body and its patterns. Here we list all the different ways you can monitor your day-to-day fertility." />
          </ul>

          </div>
        );
      }
   }

 export default class Birthcontrol extends React.Component {

    render () {

      var birthcontrolStyle = {
        paddingTop:'5rem',
        paddingRight:'12rem',
        paddingLeft:'7rem',
        marginTop:65,
        height: 300,
        width:'100%',
        backgroundColor:'rgba(164, 66, 0, .9)',
        color: "#333",
        fontFamily: "sans-serif",
        fontSize: 55,
        textAlign: "center",
        zIndex: 100
      };
      return (

      <div>

          <Jumbotron style={{backgroundColor: '#cbe8ed'}}>
            <JumbotronCol style={{width:'40%'}}>
              <div style={{height: '400px'}}>
                <img style={{paddingTop: '100px', paddingLeft:'100px', paddingBottom:'80px'}} src="css/img/health-symbol-sm.png" />
              </div>
            </JumbotronCol>

            <JumbotronCol  style={{width: '60%'}}>
              <div style={{height: '400px', paddingTop: '125px', paddingBottom:'20px'}}>
               <h1 style={{fontSize:'5em', paddingRight:'165px'}}>Birth Control Options</h1>
               <h3>Discover and compare the many options available to you. </h3>

              </div>
           </JumbotronCol>
         </Jumbotron>

        <Rows/>

      </div>


      );
    }
  }
