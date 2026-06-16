export type CardSize = "narrow" | "medium" | "large";

export type ProfileCardMember = {
  id: string;
  name: string;
  imageSrc: string;
};

export type ProfileCardContent = {
  title: string;
  label?: string;
  summary: string;
  description: string;
  members: ProfileCardMember[];
};
