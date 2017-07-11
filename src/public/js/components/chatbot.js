export default class Chatbot extends React.Component {
  render() {
    return (

      <div className='chatbot'>

        <Jumbotron className="jumbo-fadeIn fade-stagger">
          <Flexbox flexDirection="row" justifyContent="space-around" flexWrap="wrap" minHeight="20vh" >

            <JumbotronCol fadeEffect="fadeInRight" style={{width: '50%'}}>
              <Flexbox flexDirection='column' element='section'>
              <h1 className='symptomheader'style={{paddingTop: '3em'}}>Have a question about local resources?</h1>
              <h3 className='symptomdescript'>Try our chatbot to get information fast. </h3>
              </Flexbox>
            </JumbotronCol >
            <JumbotronCol className="jumbo-fadeUp">
              <Flexbox flexDirection="column" element='section'>
                <iframe src='https://webchat.botframework.com/embed/MTWomensResourceChatbot?s=x6RUQOKGgBg.cwA.HRY.UEt6QhX_zF_DXKeFOZ5Dn5LHEFzJMa5q8RYesbAvJCc'></iframe>
              </Flexbox>
            </JumbotronCol>

          </Flexbox>
        </Jumbotron>
      </div>
  )}
}
