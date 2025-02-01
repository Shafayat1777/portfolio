export type SectionName = {
  sectionName: string;
};

// type SectionName = (typeof links)[number]["name"];

export type ActiveSectionContextType = {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export type ButtonProps = {
  text: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
};

export type ExperienceCardProps = {
  title: string;
  company: string;
  website: string;
  from: string;
  to: string;
};

export type FormErrors = {
  senderEmail?: string[];
  message?: string[];
};