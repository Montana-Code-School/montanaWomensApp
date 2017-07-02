import React from 'react';
import Flexbox from 'flexbox-react';

    var headerStyle = {
       textAlign: "center"
     }

     var pStyle = {
       paddingRight: "10px",
       marginRight: "10px",
       fontSize: "18px"
     }

     var webStyle = {
       textAlign:"center"
     }

     var phStyle = {
       textAlign:"center"
     }

      class List extends React.Component {

      render (){
       return (
         <div className="col">
          <h1 style={headerStyle}> {this.props.title} </h1>
          <p  style={pStyle}> {this.props.description} </p>
          <a href='#'><h3 style={webStyle}> {this.props.website} </h3></a>
          <h4 style={phStyle}> {this.props.number} </h4>
         </div>
       );

     }
   }

      class Rows extends React.Component {
        render (){
        return (
          <div>
           <ul>
             <List title="The Women's Club" description="A community fitness center for women. More than a gym. A community of women who inspire one another and walk out the door confident and rejuvenated."  website="http://www.thewomensclub.com/"/>
              <List title="The Women's Center at U of M" description="We are a student-run, consensus based organization dedicated to raising awareness of women's, gender, and sexuality issues. We provide a current list of organizations and professionals that serve and assist women in Western Montana, as well as a safe place to meet people interested in discussing and actively responding to pertinent issues in our community. Our mission is to actively represent 21st century feminism as a dynamic discipline concerned with all issues of gender and inequality.  We are serious about advancing our agenda of tolerance, education and equality, but we love to have fun while we do it."  website="https://www.facebook.com/umwomensresourcecenter"/>
              <List title="WORD - Women's Opportunity & Resource Development, Inc." description= "WORD creates opportunities, programs and policies that inspire and support women’s development, leadership and choice, for the benefit of our entire community." website="https://womensopportunityandresourcedevelopment.wordpress.com/about"/>
              <List title="Montana Women Vote" description="Montana Women Vote is a coalition of non-profit organizations dedicated to educating and mobilizing low-income women and their allies to participate in the democratic process as informed voters, policy advocates, and community leaders."  website="http://www.montanawomenvote.org/about-mwv/history-and-mission/" number='406-543-3747'/>
              <List title="Women's Voices for the Earth" description="Women’s Voices for the Earth amplifies women’s voices to\neliminate the toxic chemicals that harm our health and communities."  website="http://www.womensvoices.org"/>
              <List title="YWCA Missoula" description="YWCA Missoula is dedicated to eliminating racism, empowering women and promoting peace, justice, freedom and dignity for all. The YWCA opens doors to opportunity and self-sufﬁciency for women and families facing poverty, violence and discrimination."  website="http://ywcaofmissoula.org" number= "24 crisis: 1-800-483-7858"/>
              <List title="Montana Coalition Against Domestic & Sexual Violence" description="(MCADSV) is a statewide coalition of individuals and organizations working together to end domestic and sexual violence through advocacy, public education, public policy, and program development. Our mission is to support and facilitate networking among our member organizations while advocating for social change in Montana."  website="http://mcadsv.com" number="National Domestic Violence Hotline:       1-800-799-7233\nNational Sexual Assault Hotline: 1-800-656-4673"/>
              <List title="Powerhouse Montana" description="PowerHouse Montana is a new initiative of the Women’s Foundation of Montana with two goals in mind: (1) connecting Montana women with the resources, mentors and opportunities they need to create thriving businesses and thriving lives, (2) increasing the number of Montana women in leadership by providing a go-to source for organizations and companies looking for their next CEO or board chair."  website="http://www.powerhousemt.org" number="406-461-7695"/>
              <List title="League of Women Voters" description="The League of Women Voters is a nonpartisan political organization encouraging informed and active participation in government. It influences public policy through education and advocacy." website="http://lwvmt.org"/>
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
        backgroundColor:'#e65c00',
        color: "#333",
        fontFamily: "sans-serif",
        fontSize: 55,
        textAlign: "center"
      };
      return (
        <div>
         <Flexbox flexDirection='row'>
           <h1 style = {birthcontrolStyle}> Connect with Local Women! </h1>
         </Flexbox>

          <Rows/>
       </div>
      );
    }
  }
