import { RoleModel } from '@app/screens/BottomSheetScreen/types';

export const mockReactNativeRole: RoleModel = {
  company: {
    name: 'Psiconnea',
    location: 'New York, NY',
    size: '1-10',
  },
  numberOfApplicants: 24,
  roleInfo: {
    title: 'Mobile Developer - React Native',
    date: '2023-12-19 10:00:00',
    skills: ['React Native', 'TypeScript', 'GraphQL', 'Node.js', 'AWS'],
    recruiter: {
      name: 'David García',
    },
    hasEasyApply: true,
    locationType: 'hybrid',
    jobType: 'full-time',
    content: [
      {
        title: 'About JW Player',
        text: "JWP is the game-changing video software and data insights platform that's revolutionizing the Digital Video Economy. With our cutting-edge technology, we give our customers unparalleled independence and control over their digital video content. We began over a decade ago as an open-source video player, but today, JWP is the driving force behind digital video for hundreds of thousands of businesses worldwide. And with over 1 billion viewers tuning in every month across 2.7 billion unique devices, there's no limit to what we can achieve. We're on the lookout for passionate and innovative candidates who are ready to join us on this journey of transforming the world of digital video.",
      },
      {
        title: 'The Broadcast Live Engineering Team',
        text: "Our Engineering team plays a big part in the company's success through the development of innovative technologies. Engineers at JW Player are passionate about writing code and solving complex problems. The Broadcast Live Team is building robust, scalable services for Broadcasters who want to deliver high quality and reliable streaming solutions at the click of a button. You will be part of our development team, designing, building, and deploying our software built using .NET.",
      },
      {
        title: 'The Opportunity',
        text: 'As a Backend Engineer, you will be a valued contributor and collaborator - responsible for defining new features and ensuring they are delivered on time and of high technical excellence. You will be a valued voice in the team, and will be working closely with other senior engineers across the Media department. You will have opportunity to work with a clean, well designed, and modern system, that is currently launching to a global market. You will be deeply involved with the growth and evolution of our services, working on an interesting variety of technologies from video packagers to encoders and messaging systems.',
      },
    ],
  },
  roleUser: {
    isTopChoice: false,
  },
  user: {
    isPremium: true,
  },
};
