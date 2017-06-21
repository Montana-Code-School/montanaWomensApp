import React from 'react';







 <h1>Symptom Checker</h1>
  <Table className="container-table">
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
 

  }
 }
}


export default SymptomChecker
