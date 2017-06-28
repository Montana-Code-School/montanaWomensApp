import React from 'react';

        var pStyle = {
          fontSize: "20px",
          padding: "5px"
        }

        var fontStyle = {
          fontSize: "18px",
          padding: "5px"
        }

 class List extends React.Component {
        render () {
        return (
          <div>
          <h1> {this.props.title} </h1>
          <p style={pStyle}> {this.props.description} </p>
          <a href = "#"><h5 style={fontStyle}> {this.props.website} </h5> </a>
          <h6 style={fontStyle}> {this.props.number} </h6>
          </div>
        );
      }
    }

      class Rows extends React.Component {
        render () {

        return(
          <div>
            <ul>
              <List title="The Women's Club" description="A community fitness center for women. More than a gym. A community of women who inspire one another and walk out the door confident and rejuvenated." number="406-728-4410" website="http://www.thewomensclub.com/"/>
              <List title="The Women's Center at U of M" description="We are a student-run, consensus based organization dedicated to raising awareness of women's, gender, and sexuality issues. We provide a current list of organizations and professionals that serve and assist women in Western Montana, as well as a safe place to meet people interested in discussing and actively responding to pertinent issues in our community. Our mission is to actively represent 21st century feminism as a dynamic discipline concerned with all issues of gender and inequality.  We are serious about advancing our agenda of tolerance, education and equality, but we love to have fun while we do it."  website="https://www.facebook.com/umwomensresourcecenter"/>
              <List title="WORD - Women's Opportunity & Resource Development, Inc." description="WORD creates opportunities, programs and policies that inspire and support women’s development, leadership and choice, for the benefit of our entire community."  website="https://womensopportunityandresourcedevelopment.wordpress.com/about/"/>
              <List title="Women's Voices for the Earth" description="Women’s Voices for the Earth amplifies women’s voices to\neliminate the toxic chemicals that harm our health and communities."  website="http://www.womensvoices.org/" number="406-543-3747"/>
              <List title="YWCA Missoula" description="YWCA Missoula is dedicated to eliminating racism, empowering women and promoting peace, justice, freedom and dignity for all. The YWCA opens doors to opportunity and self-sufﬁciency for women and families facing poverty, violence and discrimination."  website="http://ywcaofmissoula.org/" number="24 crisis: 1-800-483-7858"/>
              <List title="Powerhouse Montana" description="PowerHouse Montana is a new initiative of the Women’s Foundation of Montana with two goals in mind: (1) connecting Montana women with the resources, mentors and opportunities they need to create thriving businesses and thriving lives, (2) increasing the number of Montana women in leadership by providing a go-to source for organizations and companies looking for their next CEO or board chair."  website="http://www.powerhousemt.org/" number="406-461-7695"/>
              <List title="League of Women Voters" description="The League of Women Voters is a nonpartisan political organization encouraging informed and active participation in government. It influences public policy through education and advocacy."  website="http://lwvmt.org/"/>

            </ul>
          </div>
        );
      }
    }

      export default class Resources extends React.Component {

         render () {
           return (
             <div>
               <Rows/>
            </div>
           );
         }
       }
