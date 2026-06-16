import { ProfileCardContent } from "../model/profile-card.types";

export const profileCardDemoContent: ProfileCardContent = {
  title: "Card Component",
  label: "Container query demo",
  summary: "Most responsive components depend on the viewport.",
  description: "This component adapts to the space it is given.",
  members: [
    {
      id: "member-1",
      name: "Profile One",
      imageSrc: "/images/profile_01.png",
    },
    {
      id: "member-2",
      name: "Profile Two",
      imageSrc: "/images/profile_02.png",
    },
    {
      id: "member-2",
      name: "Profile Three",
      imageSrc: "/images/profile_03.png",
    },
  ],
};
