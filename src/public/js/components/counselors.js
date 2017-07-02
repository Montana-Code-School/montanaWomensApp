import React from 'react';
import Flexbox from 'flexbox-react';

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
     textAlign:"center",
     fontSize: "1.5em"
   }

   class List extends React.Component {
     render (){
     return (
       <div className='counsel'>
       <h1 style = {titleStyle}> {this.props.title} </h1>
       <p style = {pStyle}> {this.props.description} </p>
       <a href='#'><h5 style = {websiteStyle}> {this.props.website} </h5></a>
       <h6 style = {fontStyle}> {this.props.number} </h6>
       </div>
     );
    }
   }

   class Rows extends React.Component {
      render () {
        return(
          <div>
            <ul>
              <List title="Aletheia Marriage Counseling" description="James W. Ramsey,  MA, MFT, LCPC  You'll be surprised how fast couples experience incredible results after putting into practice just a few simple principles.  It starts with a desire to have a better relationship and the.willingness to have something different.  All our coaching and counseling programs are designed to meet you....where you're at now....no matter how bad it may feel. Located at 2870 St. Michael Drive  Missoula Mt 59803"  website="www.aletheiamarriagecounseling.net" number='(406)251-7073'/>
             <List title="Marriage and Couple Counseling" description="David Meurer, LCSW  In my marriage and couples counseling Missoula practice, I help people foster more caring and support in their relationship. This includes helping people build a strong connection to each other and bring more joy into their life together. I help couples learn the skills they need to move through conflict well. This means learning to value each other’s unique input when facing challenges and stress. In my marriage and couples counseling Missoula practice, I rely on models that have been tested through years of research. These models can bring people to new understandings and insights, which can help them make sense of the difficulties they are having. Then they can learn new ways to solve problems and take care of each other.Located at 415 N Higgins #132 Missoul Mt 59802 "  website="www.counselingmissoula.com" number='(406)531-6250'/>
              <List title="Stepping Stones Counseling" description="Today you are one step closer to a new you where you feel empowered and on a positive path to personal growth and managing your alcohol use by keeping to lowrisk guidelines or choosing abstinence for all mood altering chemicals. As solution focused counselors, our goal is to help you uncover your true potential and lead a life that is worth celebrating. While we cant change difficult situations of the past, we can work together to better understand and resolve the challenges in your life created by your alcohol or drug use. By applying complementary therapy approaches and techniques, we will unearth longstanding behavior patterns or negative perceptions that may be holding you back from experiencing a more fulfilling and meaningful life. If youre looking for extra support and guidance through a challenging situation or youre just ready to address the issues created by your alcohol or drug use, we look forward to working with you to achieve your goals. Located at 202 Brooks St Ste 300 Missoula Mt" website="www.steppingstonesmissoula.com" number='(406)926-1453'/>
              <List title="Nardi and Stube" description=" Julie A Nardi MA and David B Stube PhD.  As a couple counseling couples, we can offer not only male and female perspectives to each struggle brought to us, but an understanding of the intensity of emotions in partnerships and the desire to hang on to the myth of the promise of ease and effortless relationship. As well, we have a great appreciation of the difficulty and fear involved in change. We can help you move from a relationship in which you feel miles away from your partner to one that includes deep emotional connection, greater acceptance of self, and greater skill in ceasing your efforts to mold your partner into who you want them to be rather than who they are. Located at 537 Stephens Ave Missoula Mt 59801"  website="www.gardencitycouples.com" number='(406)542-8222'/>
              <List title="Women's Counseling Center" description="Diane Adams LCSW MAC offers therapy for Individuals, Partners, EMDR, Addiction treatment, she offers Daring Way groups, Private retreats, and Sex Positive Culture.  Located at 725 W Alder Ste 18  Missoula Mt 59802"  website="www.womenscounselingcenter.org"number='(406)728-8388 or email at wcc@blackfoot.net'/>
              <List title="Leanne Young MA LCPC" description="Leanne Young, MA, LCPC is a licensed clinical professional counselor in private practice in Missoula, Montana. She has over 22 years of education and experience in her field. Prior to the establishment of her private practice, she worked for various agencies and the University of Montana.She has extensive experience providing psychotherapy with adults, couples, families and adolescents in various capacities. Leanne aims to flexibly structure the course of treatment to accommodate her clients therapeutic needs. She assists people to transform from feeling blocked in some area of their lives to achieving their own definition of success from weekly sessions.The decision to attend therapy is a significant one. People seek therapy to deal with issues, conflicts, and problems associated with a range of topics. What underlies a successful therapeutic relationship is the creation of a safe place for one to explore conflicts, issues, and feelings. From that premise, meaningful and significant growth occurs. The kind of growth one is seeking is best decided upon by careful collaboration between the therapist and the client. Working as a general practitioner, she has additional specialized expertise in: Depression, Anxiety, Eating disorders (anorexia, bulimia, and overeating), Couples Counseling, Parenting, Divorce adjustment.  In addition to her work as a therapist, she also is certified in Divorce and Family Mediation with a specialization in development of parenting plans, emphasizing the best possible adjustment of the children. Located at 111 N Higgins Ave Missoula Mt 59802"  website="www.leanneyoung.com" number='(406)360-3262'/>
              <List title="Dr Q Counnseling" description="If you'd like to discuss your concerns with a counselor, visit Dr. Q Counseling in Missoula, MT. If necessary, we can also come to you. We work hard to help individuals and families who are struggling with particular mental health issues or general anxieties and fears. We accept most insurance plans and take Medicaid. If you'd like to receive counseling for a gambling problem, we offer funding to help cover the costs. If you're nervous about receiving care, we'll do our best to put your mind at ease. Our counselor graduated from the University of Montana and is a member of the American Mental Health Counselors Association. At our clinic, we want our patients to move beyond their struggles, and we offer a variety of treatments in an effort to help them do so. This includes: Gambling addiction therapy, Parent-child interaction therapy, Addiction counseling, Trauma counseling.  Located at 725 W Central Ave  Ste 209 Missoula, Mt 59801"  website="www.missoulacounselingservices.com" number='(406)203-0814'/>
              <List title="Bluebird Psychotherapy" description="My name is Ivy Irvine, LCSW, and I am a licensed clinical social worker and therapist at Bluebird Psychotherapy, located in downtown Missoula, Montana.  I provide counseling and consultation services for children, families, and adults.   I accept many forms of insurance and am happy to work with individuals and families on a sliding scale fee system. Therapy and support should be accessible to everyone regardless of cost. I specialize in working with children, families and adults who have experienced trauma, grief and loss and who need a place to experience safe, kind, and healing relationships. I work with children and adults who have needs around the following: Adoption, Attachment Issues (RAD), Anxiety, Behavioral Problems, Child Abuse and Neglect, Depression, Divorce, Domestic Violence, Emotional Disturbance, Family Conflict, Grief, Impulsivity, Oppositional Defiance, Parenting Peer Relationships, School Issues, Self-Esteem, Self-Harming Behaviors, Sexual Abuse, Stress, Suicideation, Trauma and PTSD.  Located at 725 W. Alder   Ste 28, Missoula, Mt 59802"  website="www.bluebirdpsychotherapy.com" number='(406)546-0082'/>
             </ul>
          </div>
        );
      }
    }

    export default class Counselors extends React.Component {
      render (){
        var counselorsStyle = {
            padding:50,
            marginTop:65,
            height: 300,
            width: '100%',
            backgroundColor:'rgba(179,71,0, 0.9)',
            color: "#333",
            fontFamily: "sans-serif",
            fontSize: 55,
            textAlign: "center"


        };

        return (
          <div>
          <Flexbox className='healthPage' flexDirection='row'>
              <h1 style = {counselorsStyle}> Find a Local Counselor Near You</h1>
          </Flexbox>

          <Rows/>
          </div>


        );
    }
  }
