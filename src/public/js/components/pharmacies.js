import React from 'react';



export default class Pharmacies extends React.Component{

  render (){
    var pharmaciesStyle = {
      padding:50,
      marginTop:65,
      height: 300,
      backgroundColor:'#8f246b',
      color: "#333",
      fontFamily: "monospace",
      fontSize: 55,
      textAlign: "center"
    };

    return (
      <div>
           <h1 style = {pharmaciesStyle}>Find a Pharmacy That Fits Your Needs</h1>

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

   class Rows extends React.Component {
     render (){
     return(
       <div>
         <ul>
           <List title="CVS Pharmacy (two locations)" description="Pharmacy Hours for 1902 Brooks Street Missoula, MT 59801 and Target Location, 2420 N Reserve St Missoula, MT 59808,  Mon-Fri  8:00 AM - 9:00 PM, Sat 9:00 AM - 6:00 PM, Sun 10:00 AM - 6:00 PM"  number=' Phone number for Brooks St location (406) 728-1380, for Target location (406)728-9463'/>
           <List title="Granite Pharmacy" description="Located at 2230 27th Ave, Missoula, MT 59804. Pharmacy Hours Mon-Fri	8:30AM–6:30PM, Sat 9AM–4PM" number="(406)926-2940"/>
           <List title="Missoula Fresh Market Pharmacy on Broadway" description="Located at 800 W Broadway St, Missoula, MT 59802. Pharmacy Hours Mon -Fri 9AM - 9PM, Saturday	9AM–6PM Sunday 10AM–6PM"  number='(406)721-6009'/>
           <List title="Walmart (two locations)" description="Pharmacy Hours for 4000 Hwy 93 S, Missoula, MT 59804 and 3555 Mullan Rd, Missoula, MT 59808 locations - Mon-Fri 9AM -9PM, Saturday	9AM–7PM, Sunday	10AM–6PM"  number='Phone number for Hwy 93 location - (406)251-6066. Phone number for Mullan Rd. location - (406)829-8532'/>
           <List title="Montana Compounding Pharmacy" description="111 N Higgins Ave, Missoula, MT 59802, Hours: Mon -Fri 9AM-5:30PM"  number='(406)542-2888'/>
           <List title="Missoula Pharmacy" description="1211 S Reserve St #102, Missoula, MT 59801, Hours: Mon - Fri 9AM-5PM"  number='(406)728-5650'/>
           <List title="Broadway Pharmacy" description="500 W Broadway St, Missoula, MT 59802, Hours:Mon-Fri 7AM -5:30PM"  number='(406)327-1650'/>
           <List title="Albertsons Pharmacy (4 locations)" description="2205 Oxford St, Missoula, MT 59801,         3800 S Russell St, Missoula, MT 59801, 1003 E Broadway St, Missoula, MT 59802,  2230 N Reserve St, Missoula, MT 59808 Hours for all four locations: Mon-Fri 8AM-8PM Sat 9AM-6PM Sun 10AM-4PM" number='Phone number for 2205 Oxford St location (406)549-5127, for 3800 S Russell St location (406)549-7717,  for 1003 E Broadway St location (406)549-6163, for 2230 N Reserve St location (406)728-1118'/>
           <List title ='Shopko Pharmacy' description ='2510 S Reserve St, Missoula, MT 59801, Hours: Mon-Fri 8AM-9PM Sat 9AM-6PM Sun 10AM-6PM' number = '(406)721-3789'/>
           <List title = 'Costco Pharmacy' description ='3220 N Reserve St, Missoula, MT 59808, Hours: Mon-Fri 10AM-7PM Sat 9:30AM-6PM' number = '(406)542-3807'/>
           <List title =" Eastgate Pharmacy" description ='1003 E Broadway St # 2, Missoula, MT 59802, Hours: Mon-Fri 8:30AM-9PM Sat 9AM-6PM Sun 10AM-4PM' number = '(406)549-6163'/>
           <List title='Rosauers Pharmacy' description ='2350 S Reserve St, Missoula, MT 59801, Hours: Mon-Fri 9AM-8PM Sat 9AM-6PM Sun 10AM-6PM' number = '(406)721-5330'/>
           <List title ='Savmor Drug 1' description ='1610 S 3rd St W #100, Missoula, MT 59801, Hours: Mon-Fri 9:30AM-6PM Sat 9:30AM-4PM' number = '(406)721-6017'/>
           <List title ='Palmers Pharmacy' description ='918 SW Higgins Ave, Missoula, MT 59803, Hours: Mon-Fri 9AM-7PM Sat 9AM-3PM' number = '(406)549-4125'/>
           <List title ='Walgreens Pharmacy' description ='2100 Brooks St, Missoula, MT 59801, Hours: Mon-Fri 8AM-8PM Sat 9AM-6PM Sun 10AM-6PM' number = '(406)728-2089'/>
           <List title ='Pharmalogic Pharmacy' description ='4404 Expressway, Missoula, MT 59808,' number = '(406)543-1163'/>

         </ul>
       </div>
     );
   }
 }
