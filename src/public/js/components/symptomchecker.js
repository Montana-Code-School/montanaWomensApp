import React from 'react';

 export default class Symptomchecker extends React.Component {
        componentDidMount(){
          $(document).ready(function () {
              $("#symptomSelector").symptomSelector(
              {
                  mode: "diagnosis",
                  webservice: "https://sandbox-healthservice.priaid.ch", //or for live data https://healthservice.priaid.ch
                  language: "en-gb", // You can change language here to de-ch, tr-tr...
                  specUrl: "sampleSpecialisationPage",// Here should come url for specialisations doctor search page
                  accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im1uYmFpcmRAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIxNzQwIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDE3LTA2LTAyIiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE0OTc1ODUzOTcsIm5iZiI6MTQ5NzU3ODE5N30.hTSBndgY4Rs6Xo58EVrVilCPXxfjZQ-R5YMM3e_ncwk" //Place here your token
              });
          });
        }

        render () {
        return (
          <div>
          <table className="container-table">
              <tr>
                  <td valign="middle" colspan="2" className="td-header box-white bordered-box width50"><h4 className="header" id="selectSymptomsTitle"><span className="badge pull-left badge-primary visible-lg margin5R">1</span></h4></td>
                  <td valign="middle" className="td-header bordered-box box-white width25"><h4 className="header" id="selectedSymptomsTitle"><span className="badge pull-left badge-primary visible-lg margin5R">2</span></h4></td>
                  <td valign="middle" className="td-header bordered-box box-white width25"><h4 className="header" id="possibleDiseasesTitle"><span className="badge pull-left badge-primary visible-lg margin5R">3</span></h4></td>
              </tr>
              <tr>
                  <td valign="top" className="selector_container bordered-box box-white width25"><div id="symptomSelector"></div></td>
                  <td valign="top" className="selector_container bordered-box box-white width25"><div id="symptomList"></div></td>
                  <td valign="top" className="selector_container bordered-box box-white width25"><div id="selectedSymptomList"></div></td>
                  <td valign="top" className="selector_container bordered-box box-white width25"><div id="diagnosisList"></div></td>
              </tr>
          </table>
          <div>
              <a target="_blank" href="http://corporate.priaid.ch"><img className="logo" alt="priaid" src="symptom_selector/images/logo.jpg" /></a>
              <span><a className="priaid-powered" target="_blank" href="http://corporate.priaid.ch"> powered by priaid</a> </span>
          </div>
          </div>
        );
      }
    }
