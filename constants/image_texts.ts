interface Link {
  href: string;
  text: string;
}

export interface HrefAndTexts {
  startdown: Link[];
  bumerang: Link[];
  bumerang2: Link[];
  bumerang3: Link[];
  bumerang4: Link[];
  calendar1: Link[];
  calendar2: Link[];
  english: Link[];
  fitness: Link[];
  publisher: Link[];
}

export const hrefAndTexts: HrefAndTexts = {
  startdown: [
    {
      href: "/startdown/calendar.png",
      text: "<p>In the Calendar, we have utilized different React features and different libraries. For example, for data fetching we have used <i>React Query</i>, for time management we have used <i>dayjs</i>, and for the repeating components we have used <i>React Components</i>.</p>",
    },
    {
      href: "/startdown/course.png",
      text: "<p>In the Course main section, we have implement <i>svg</i> and <i>svg animations</i>. Again for data fetching, here we have implement <i>pagination</i>, and for the states we have used <i>Redux Toolkit</i>.</p>",
    },
    {
      href: "/startdown/courseana.png",
      text: "<p>In the Question Solving Section, we have utilized <i>Redux persist</i> for data persistence agains refreshing. Also we have write different <i>utils functions</i> to implement checking and displaying results.</p>",
    },
  ],
  bumerang: [
    {
      href: "https://github.com/brhmr",
      text: "Among several single-player games available, only three are showcased here. One of these games is KUYU, where students aim to solve as many questions as possible before falling into the KUYU. This game helps develop students' quick thinking and accuracy.",
    },
    {
      href: "https://www.linkedin.com/in/brhmr/",
      text: "Another game featured is MAZE. In this game, students must solve questions before navigating through a maze. After solving a question, they have a limited time of 20 seconds to move within the maze. Once the time runs out, the maze disappears, and the game continues until the user reaches the end.",
    },
    {
      href: "https://calendar.google.com/calendar/u/0/r?tab=rc",
      text: "The third game is SNAKE. Similarly, after solving questions, students attempt to maneuver their snake to eat food and grow longer. High scores are recorded and visible within all games, adding a competitive element to the experience.",
    },
  ],
  bumerang2: [
    {
      href: "https://github.com/brhmr",
      text: "Among the multiplayer games, three are highlighted here. The first one is Bomb where the player's area shrinks with each correct answer. If the area diminishes entirely, the user loses the game.",
    },
    {
      href: "https://www.linkedin.com/in/brhmr/",
      text: "Additionally, there are four-player games like FETİH where students aim to conquer all regions with each correct answer. Winning occurs when a user successfully conquers all the regions.",
    },
    {
      href: "https://calendar.google.com/calendar/u/0/r?tab=rc",
      text: "Similar to Fetih there is also Maraton where students aim to reach the farthest region with each correct answer. The player who reaches the farthest region first wins.",
    },
  ],
  bumerang3: [
    {
      href: "https://github.com/brhmr",
      text: "Students can select various lessons offered in high schools, and the platform also integrates related subjects. Within this panel, they can choose game options such as playing with friends, multiplayer, or solo, with all options readily available.",
    },
    {
      href: "https://www.linkedin.com/in/brhmr/",
      text: "In this section, students can solve questions directly on their PC. We have integrated a canvas where users can draw, erase, and perform other functions while solving the questions.",
    },
    {
      href: "https://calendar.google.com/calendar/u/0/r?tab=rc",
      text: "Once again, the platform consists of three parts: Practice, Competition, and Games sections. Students have the flexibility to study the lessons using their preferred method.",
    },
  ],
  bumerang4: [
    {
      href: "https://github.com/brhmr",
      text: "These are the charts available in the program. we have user chartjs and customize it with different shapes.",
    },
    {
      href: "https://www.linkedin.com/in/brhmr/",
      text: "Here, students can track their progress in each subject and easily identify which topics they have mastered and which ones they need to focus on.",
    },
    {
      href: "https://calendar.google.com/calendar/u/0/r?tab=rc",
      text: "Here, we have included a map of Turkey to display the regions, the number of available users, and your current rank.",
    },
  ],
  calendar1: [
    {
      href: "https://github.com/brhmr",
      text: "<p>Here, users can view their daily schedules along with the corresponding hours, and they have the option to update the hours and notes directly. Additionally, users can track their weekly and monthly goals in this manner. Moreover, any conflicts in the schedules are clarified by the programs.</p>",
    },
    {
      href: "https://www.linkedin.com/in/brhmr/",
      text: "<p>In the main section, when users open the app for the first time, they can immediately view their schedules for the day. From here, users have the ability to add, update, or delete schedules directly.</p>",
    },
    {
      href: "https://calendar.google.com/calendar/u/0/r?tab=rc",
      text: "<p>Here, the chronometer has been developed using Apache Charts. Students can utilize this tool while studying to implement Pomodoro techniques effectively.</p>",
    },
  ],
  calendar2: [
    {
      href: "https://github.com/brhmr",
      text: "<p>In this view, users have the ability to add, update, or delete schedules directly. They can also choose colors different from the default options and set alarms. Additionally, users can specify the frequency of program repetition, selecting from options such as weekly, monthly, or daily.</p>",
    },
    {
      href: "https://www.linkedin.com/in/brhmr/",
      text: "<p>This is the weekly mode, displayed on a tablet screen. Students can track their progress for the week, viewing which programs they have completed or not, and assess how effectively they have applied the programs in their daily life. </p>",
    },
    {
      href: "https://calendar.google.com/calendar/u/0/r?tab=rc",
      text: "<p>Here, we've developed the settings section for the app. Users have the option to customize default colors, switch between light and dark themes, and set their preferred alarm defaults. Additionally, they can enable notifications for reminders.</p>",
    },
  ],
  english: [
    {
      href: "/english/dashboard.png",
      text: "<p>In the Dashboard, we have designed a user interface similar to Netflix, and Users can work on different daily dialogues according to their preferences.</p>",
    },
    {
      href: "/english/chat.png",
      text: "<p>In the Chat, users have to repeat the dialagues to practice. Here, we have implement <i>OpenAI API</i>, <i>Midjourney</i> and <i>elevenlabs API</i>. Also we implement <i>speech-to-text</i> for grading the speech accuracy.</p>",
    },
    {
      href: "/english/dialogs.png",
      text: "<p>Here, users can see their work history and if they want they can work on same dialogues. Again we have implement <i>pagination</i> and <i>React Query</i>.</p>",
    },
  ],
  fitness: [
    {
      href: "/english/dashboard.png",
      text: "<p>In the Main Section, users can see different muscle groups and corresponding exercises by clicking the buttons positioned in the left and right. Here, we have used <i>React Context</i> and <i>React hooks</i> for state management. Also for the 3D model we have used <i>Three.js</i> and <i>React-fiber</i>.</p>",
    },
    {
      href: "/english/chat.png",
      text: "<p>This is the Diet Section. Here, users can read the diet suggestions for different body regions. And if they want they can adjust the lighting. Also while scrooling interesting animation waits for them.</p>",
    },
    {
      href: "/english/dialogs.png",
      text: "<p>This part is the most enjoyable section. Users can play a game in which they must avoid obstacles and prevent themselves from falling. Here, we have utilizied <i>Object Oriented Programming</i> and <i>React-fiber</i>  </p>",
    },
  ],
  publisher: [
    {
      href: "/english/dashboard.png",
      text: "<p>This UI is for teachers, or in other words, users who are responsible for preparing questions. They can see all of their questions, including the stage they are in and what is currently being edited.</p>",
    },
    {
      href: "/english/chat.png",
      text: "<p>This design is prepared for uploading images to AWS S3 to be sent to the designers. They choose the topic by looking at the question numbers in each topic, and they choose accordingly based on which topic has fewer questions.</p>",
    },
    {
      href: "/english/dialogs.png",
      text: "<p>This UI is for designers, or in other words, users who are responsible for editing the questions such as, adding images, rearranging fonts, etc. They can see all of their questions, including the stage they are in and what is currently being edited. </p>",
    },
    {
      href: "/english/dialogs.png",
      text: "<p>This design is prepared for re-uploading images to AWS S3 to be sent back to the teachers for approval. They select the questions by examining the question numbers in each topic, choosing accordingly based on which topic has more questions. </p>",
    },
  ],
};
