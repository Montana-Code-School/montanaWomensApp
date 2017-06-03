Notes on app development:

Weekend of May 27 and 28:

  * went through process of deciding and pitching projects.
  * chose MT Women's App
  * Initial goals:
    - integrate with medical api to provide search functionality for doctors, symptoms, and other health info
    - integrate with Google Maps API to show locations of local service providers
    -chatbot (optional)
  * Initial User profiles:
    - UM College student
    - local high school student
    - rural mother
    - Native American woman living on a reservation
    - middle-aged divorced woman new to the contemporary dating scene
  * searched for appropriate medical APIs
  * decided to try Medline Plus from US National Library of Medicine

Week of May 29-June3

  * Worked on getting MedlinePlus API to work, but decided against using it.
    > Took a lot of time to get initial XMLHttpRequest to work. Data was in XML which was unfamiliar format.
    > Created a separate server:
      > Had to get npm package <xml2js> in order to parse the XML into json.
      > Had to get npm package <cors> to handle extra access-control headers
    > Had difficulty getting api call to work with React. The problem ended up being with how we accessed the response data. Data was in deep tree structure. Required us to specify exact path to data in order for it to display in state in React.
    > Data displayed, but included html.
      > Had to get npm package <striptags> and run it on data before sending it to state.
    > Decided that it was going to be too difficult with the time we had to figure out how to specify the search query that would give us the results we wanted because of the deep tree structure.
    > Decided that our user most likely would be looking not for general health information but more of symptom checking. Resolved to look into a different symptom checker API and to either go that route or create own database.
