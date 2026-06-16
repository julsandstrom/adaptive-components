import Image from "next/image";
import type { ProfileCardContent } from "../model/profile-card.types";

type ProfileCardProps = ProfileCardContent & {
  id: string;
};

const ProfileCard = ({
  id,
  title,
  label,
  summary,
  description,
  members,
}: ProfileCardProps) => {
  const titleId = `${id}-title`;

  return (
    <article
      aria-labelledby={titleId}
      className="
        @container/profile-card
        w-full rounded-lg
        border border-white/10
        bg-white/10 shadow-md
      "
    >
      <div className="p-4 @md/profile-card:p-6">
        <header>
          <h2
            id={titleId}
            className="text-xl @sm/profile-card:text-2xl font-bold @lg/profile-card:text-3xl"
          >
            {title}
          </h2>

          {label && (
            <p className="text-base  @lg/profile-card:text-xl font-light">
              {label}
            </p>
          )}
        </header>

        <div
          className="
            mt-10 grid gap-10

            @md/profile-card:mt-0
            @md/profile-card:grid-cols-[1fr_auto]
            @md/profile-card:items-center

            @lg/profile-card:mt-10
            @lg/profile-card:grid-cols-1
          "
        >
          <ul
            aria-label="Profile members"
            className="-mx-2 flex justify-around @md/profile-card:order-2 @md/profile-card:mx-0 @md/profile-card:flex-col @md/profile-card:gap-5 @lg/profile-card:flex-row @lg/profile-card:gap-10 "
          >
            {members.map((member) => (
              <li
                key={member.id}
                className="
    relative size-14 shrink-0 overflow-hidden rounded-full

    @md/profile-card:size-20
    @lg/profile-card:size-30
  "
              >
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  fill
                  sizes="
      (min-width: 640px) 80px,
      (min-width: 448px) 64px,
      56px
    "
                  className="object-cover"
                />
              </li>
            ))}
          </ul>

          <div
            className="
              space-y-4

              @md/profile-card:order-1
              @lg/profile-card:text-center
            "
          >
            <p className="font-semibold text-black/90 @sm/profile-card:text-xl @lg/profile-card:text-xl">
              {summary}
            </p>

            <p className="font-light  @lg/profile-card:text-base">
              {description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProfileCard;
