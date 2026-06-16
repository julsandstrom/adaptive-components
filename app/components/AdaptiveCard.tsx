import Image from "next/image";

const members = [
  "/images/profile_01.png",
  "/images/profile_02.png",
  "/images/profile_03.png",
];

const AdaptiveCard = () => {
  return (
    <article className="@container/profile-card  bg-white/10 rounded-lg shadow-md w-full border-[0.3px] border-white/10">
      <div className=" p-4 @md/profile-card:p-6  profile-card ">
        <header>
          <div className=" ">
            <h2 className="font-bold text-xl @lg/profile-card:text-2xl">
              Adaptive Card
            </h2>
            <p className="font-light text-base">Demo</p>
          </div>
        </header>

        <div
          className="
    profile-card-content
    grid gap-10 mt-10

    @md/profile-card:mt-0
    @md/profile-card:grid-cols-[1fr_auto]
    @md/profile-card:items-center

    @lg/profile-card:mt-10
    @lg/profile-card:grid-cols-1
    @lg/profile-card:items-center
  "
        >
          <ul
            aria-label="Profile members"
            className="
    flex justify-around -mx-2

    @md/profile-card:order-2
    @md/profile-card:mx-0
    @md/profile-card:flex-col
    @md/profile-card:gap-5

    @lg/profile-card:order-2
    @lg/profile-card:flex-row
    @lg/profile-card:gap-10
  "
          >
            {members.map((src, index) => (
              <li key={src}>
                <Image
                  src={src}
                  alt=""
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </li>
            ))}
          </ul>

          <div
            className="
    space-y-4

    @md/profile-card:order-1
    @lg/profile-card:order-1
  "
          >
            <p className="font-medium @lg/profile-card:text-center @lg/profile-card:text-lg">
              Most responsive components depend on the viewport.
            </p>
            <p className="font-light @lg/profile-card:text-center @lg/profile-card:text-base">
              This component adapts to the space it is given.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default AdaptiveCard;
