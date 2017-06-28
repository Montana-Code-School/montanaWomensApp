import React from 'react';


export default class Doctors extends React.Component{
  render (){
    var doctorsStyle = {
      padding:50,
      marginTop:65,
      height: 300,
      backgroundColor:'#00b38f',
      color: "#333",
      fontFamily: "monospace",
      fontSize: 55,
      textAlign: "center"
    };
    return (
      <div>
           <h1 style = {doctorsStyle}>Take the Time to Choose From the Many Doctors and Clinics in Your Area</h1>

           <Rows/>
      </div>

      );
     }
   }

   var pStyle = {
     fontSize: "20px",
     padding: "5px",
     textAlign:"center"
   }

   var fontStyle = {
     fontSize: "18px",
     padding: "5px",
     textAlign:"center"
   }

   var titleStyle ={
     textAlign:"center"
   }

   var websiteStyle = {
     textAlign:"center"
   }

   class List extends React.Component {
     render (){
     return (
       <div>
       <h1 style = {titleStyle}> {this.props.title} </h1>
       <p style = {pStyle}> {this.props.description} </p>
       <h5 style = {websiteStyle}> {this.props.website} </h5>
       <h6 style = {fontStyle}> {this.props.number} </h6>
       </div>
     );
    }
   }

   class Rows extends React.Component{
   render (){
     return(
       <div>
         <ul>
           <List title="Teen Challenge Montana Women's Outreach" description="Are you looking for an answer to your or a family member's drug addiction? Is alcohol abuse becoming chronic? Have these and other life-controlling problems been spinning out of control ? We have a proven track record of helping people just like you: good people with bad problems. At Pacific Northwest Adult & Teen Challenge we teach men and women principles with purpose. Through biblical principles we help them define who they are and provide them with the tools needed to assist them in the process of recovery. Our rigorous and regimented 12-month program offers personal growth, group studies, and counseling."  website="www.teenchallengepnw.com" number='(406)543-1912'/>
           <List title="Care Net of Missoula Montana Pregnancy Center" description="If you are facing an unexpected pregnancy it is natural for you to be scared and to want a way out. The unknown and unexpected can be a fearful place. We are here to help you have a clear picture of the facts so that you can make the best, informed decision for your future."  website="www.carenetmissoula.org" number='(406)549-0406'/>
           <List title="Missoula Urban Indian Health Center" description="The Missoula Urban Indian Health Center (MUIHC) serves the Native American community in Missoula, Montana and surrounding areas.  MUIHC provides a variety of services: Diabetes Medication Management & Self Care, Immunization and Variety Of Testing, Health Promotion & Disease Prevention, Chemical Dependency Counseling, Mental Healthcare, Community Services, Transportation"  website="www.muihc.org" number='(406)829-9515'/>
           <List title="Women's Choice of Missoula" description="Women’s Choice of Missoula is the OB/Gyn clinic of Dr. Beverly L. Braak, a solo practitioner. We are open 4 days a week to assist you with any questions or concerns you might have. When Women’s Choice of Missoula is closed, an answering service will answer your call and contact Dr. Braak as necessary. Dr. Braak is in a call group with many other great doctors, so if for some unfortunate reason Dr. Braak is not available, one of the other doctors in the group would be able to assist you. If you are an obstetrics patient of Women’s Choice of Missoula, Dr. Braak will be on call for you throughout your entire pregnancy. Dr. Braak makes every effort to deliver her OB patients even when she’s not on call. Dr. Braak has surgery privileges at both St. Patrick Hospital and Community Hospital in Missoula."  website="www.womenschoice of missoula.com" number='(406)327-2875'/>
           <List title="Woman to Woman" description="Many women feel more comfortable with a woman doctor, and it’s only natural. But it takes more to keep you at your healthiest. You want your doctor to have the quality credentials, experience and skill you can trust throughout your life. You deserve that level of medical care along with the personal understanding you expect from a woman doctor. Dr. Valerie Ann Knudsen has cared for the women in our area for 20 years. Women appreciate her warmth, compassion and dedication. Dr. Knudsen is also one of the most highly skilled physicians in the region. That’s what makes it easy to choose Woman to Woman for your healthcare. Dr. Knudsen and our entire team look forward to keeping you at your best – with the care you can feel good about."  website="www.drknudsen.com" number='(406)327-4395'/>
           <List title="Blue Mountain Clinic" description="Blue Mountain Clinic provides patient-centered, family and reproductive medicine services to the local community from a choice based perspective. We believe that choices in any health care decision should be met with dignity in a supportive environment.\n\nBlue Mountain Clinic strives to provide feminist based approaches to health care, education, and advocacy in the region. Essential activities to fulfill this mission require visible advocacy on the local level to improve policies that have a negative impact on patient’s economic and political access to health care."  website="http://www.bluemountainclinic.org" number='(406)721-1646'/>
           <List title="Planned Parenthood" description="Planned Parenthood is one of the nation's leading providers of high-quality, affordable health care for women, men, and young people, and the nation's largest provider of sex education.  Health services include: birth control, abortion, testing and treatment for STDs, HIV services, patient education and general health services."  website="https://www.plannedparenthood.org" number='(406)728-5490'/>
           <List title="First Step Resource Center" description="provides medical evaluations, forensic interviews, mental health treatment, care coordination and referrals for child and adult victims of abuse or assault.\n\nFirst Step is dedicated to reducing trauma and promoting healing for child victims of abuse and adult victims of sexual assault. We serve children, families and adults in Missoula and surrounding counties."  website="http://montana.providence.org/hospitals/st-patrick/services/first-step" number='(406)329-5776'/>
           <List title ="Women's Care and Family Wellness" description="If you’re looking for a doctor in Missoula for you and your family, the Providence Women’s Care and Family Wellness clinic has providers for primary care and women’s care. We also offer unique services like hormone therapy, functional medicine and naturopathic medicine if you’re interested in other treatment options beyond traditional Western medicine.\n\nUnlike other clinics, we’ll take a little more time with you during your appointment, getting to know you, your medical history and other factors that could be affecting your health. We’ll take care of the specific health issue that prompted you to make an appointment, but we’ll also focus on your wellness." website="http://montana.providence.org/clinics/womens-care-and-family-wellness" number="406-327-3057"/>
         </ul>
       </div>
     );
    }
   }
