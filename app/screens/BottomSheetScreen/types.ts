export type RoleModel = {
  company: {
    name: string;
    location: string;
    size: '1-10' | '10-25' | '25-50' | '50-100' | '100-250' | '250-500' | '500+';
  };
  numberOfApplicants: number;
  roleInfo: {
    title: string;
    date: string;
    skills: string[];
    recruiter: {
      name: string;
    };
    hasEasyApply: boolean;
    locationType: 'remote' | 'hybrid' | 'office';
    jobType: 'full-time' | 'part-time' | 'contract' | 'internship';
    content: {
      title: string;
      text: string;
    }[];
  };
  roleUser: {
    isTopChoice: boolean;
  };
  user: {
    isPremium: boolean;
  };
};
