// import React from 'react';
//
// export default class Symptomchecker extends React.Component {
//         componentDidMount(){
//           $(document).ready(function () {
//               $("#symptomSelector").symptomSelector(
//               {
//                   mode: "diagnosis",
//                   webservice: "https://sandbox-healthservice.priaid.ch",
//                   language: "en-gb",
//                   specUrl: "sampleSpecialisationPage",
//                   accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Implbm5pZmVyLmVtZXJzb245QGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMTc1NiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjIwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiI5OTk5OTk5OTkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJQcmVtaXVtIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAxNy0wNi0wNiIsImlzcyI6Imh0dHBzOi8vc2FuZGJveC1hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNDk4MDIwMzgzLCJuYmYiOjE0OTgwMTMxODN9.OezQONzbYn1WBgTvCG63pmmI-G4hjU5dQ63vpss4QpA"
//               });
//             });
//           }

//           render () {
//           return (
//             <div>
//             <table className="container-table">
//               <tr>
//                 <td valign="middle" colSpan="2" className="td-header box-white bordered-box width50"><h4 className="header" id="selectSymptomsTitle"><span className="badge pull-left badge-primary visible-lg margin5R">1</span></h4></td>
//                 <td valign="middle" className="td-header bordered-box box-white width25"><h4 className="header" id="selectedSymptomsTitle"><span className="badge pull-left badge-primary visible-lg margin5R">2</span></h4></td>
//                 <td valign="middle" className="td-header bordered-box width25"><h4 className="header" id="possibleDiseasesTitle"><span className="badge pull-left badge-primary visible-lg margin5R">3</span></h4></td>
//               </tr>
//               <tr>
//                 <td valign="top" className="selector_container bordered-box box-white width25"><div id="symptomSelector"></div></td>
//                 <td valign="top" className="selector_container bordered-box box-white width25"><div id="symptomList"></div></td>
//                 <td valign="top" className="selector_container bordered-box box-white width25"><div id="selectedSymptomList"></div></td>
//                 <td valign="top" className="selector_container bordered-box box-white width25"><div id="diagnosisList"></div></td>
//               </tr>
//             </table>
//             <div>
//               <a target="_blank" href="http://corporate.priaid.ch"><img className="logo" alt="priaid" src="symptom_selector/images/logo.jpg" /></a>
//               <span><a className="priaid-powered" target="_blank" href="http://corporate.priaid.ch"> powered by priaid</a> </span>
//             </div>
//             </div>
//           );
//         }
//       }
//
//
//
//
//
//
//
 // <h1>Symptom Checker</h1>
 //  <Table className="container-table">
 //     <tr>
 //         <td valign="middle" colspan="2" className="td-header box-white bordered-box width50"><h4 className="header" id="selectSymptomsTitle"><span className="badge pull-left badge-primary visible-lg margin5R">1</span></h4></td>
 //         <td valign="middle" className="td-header bordered-box box-white width25"><h4 className="header" id="selectedSymptomsTitle"><span className="badge pull-left badge-primary visible-lg margin5R">2</span></h4></td>
 //         <td valign="middle" className="td-header bordered-box box-white width25"><h4 className="header" id="possibleDiseasesTitle"><span className="badge pull-left badge-primary visible-lg margin5R">3</span></h4></td>
 //     </tr>
 //     <tr>
 //         <td valign="top" className="selector_container bordered-box box-white width25"><div id="symptomSelector"></div></td>
 //         <td valign="top" className="selector_container bordered-box box-white width25"><div id="symptomList"></div></td>
 //         <td valign="top" className="selector_container bordered-box box-white width25"><div id="selectedSymptomList"></div></td>
 //         <td valign="top" className="selector_container bordered-box box-white width25"><div id="diagnosisList"></div></td>
 //     </tr>
 //  </table>



//
// export default SymptomChecker
