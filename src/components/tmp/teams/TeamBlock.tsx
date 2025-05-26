//todo make it a component
//todo make a caroussel
import React from "react"

// Définition du type pour un membre de l'équipe
export type TeamMember = {
  name: string
  role: string
  description: string
  image: {
    src: string
    srcSet: string
  }
  socials: {
    icon: string
    color: string
    url: string
  }[]
}

// Données par défaut des membres de l'équipe
const defaultTeamMembers: TeamMember[] = [
  {
    name: "Cory Zamora",
    role: "Spécialiste Marketing",
    description: "Etiam porta sem magna malesuada mollis.",
    image: {
      src: "../../assets/img/avatars/t1.jpg",
      srcSet: "../../assets/img/avatars/t1@2x.jpg 2x",
    },
    socials: [
      { icon: "uil-twitter", color: "#5daed5", url: "#" },
      { icon: "uil-slack", color: "#d4135c", url: "#" },
      { icon: "uil-linkedin", color: "#3393c1", url: "#" },
    ],
  },
  {
    name: "Coriss Ambady",
    role: "Analyste Financier",
    description: "Aenean eu leo quam. Pellentesque ornare lacinia.",
    image: {
      src: "../../assets/img/avatars/t2.jpg",
      srcSet: "../../assets/img/avatars/t2@2x.jpg 2x",
    },
    socials: [
      { icon: "uil-youtube", color: "#c8312b", url: "#" },
      { icon: "uil-facebook-f", color: "#4470cf", url: "#" },
      { icon: "uil-dribbble", color: "#e94d88", url: "#" },
    ],
  },
  {
    name: "Nikolas Brooten",
    role: "Directeur Commercial",
    description: "Donec ornare elit quam porta gravida at eget.",
    image: {
      src: "../../assets/img/avatars/t3.jpg",
      srcSet: "../../assets/img/avatars/t3@2x.jpg 2x",
    },
    socials: [
      { icon: "uil-linkedin", color: "#3393c1", url: "#" },
      { icon: "uil-tumblr-square", color: "#5d82a4", url: "#" },
      { icon: "uil-facebook-f", color: "#4470cf", url: "#" },
    ],
  },
  {
    name: "Jackie Sanders",
    role: "Planificateur d'Investissement",
    description: "Nullam risus eget urna mollis ornare vel eu leo.",
    image: {
      src: "../../assets/img/avatars/t4.jpg",
      srcSet: "../../assets/img/avatars/t4@2x.jpg 2x",
    },
    socials: [
      { icon: "uil-twitter", color: "#5daed5", url: "#" },
      { icon: "uil-facebook-f", color: "#4470cf", url: "#" },
      { icon: "uil-dribbble", color: "#e94d88", url: "#" },
    ],
  },
  {
    name: "Tina Geller",
    role: "Acheteur Assistant",
    description: "Vivamus sagittis lacus vel augue laoreet rutrum.",
    image: {
      src: "../../assets/img/avatars/t5.jpg",
      srcSet: "../../assets/img/avatars/t5@2x.jpg 2x",
    },
    socials: [
      { icon: "uil-facebook-f", color: "#4470cf", url: "#" },
      { icon: "uil-slack", color: "#d4135c", url: "#" },
      { icon: "uil-dribbble", color: "#e94d88", url: "#" },
    ],
  },
]

// Le composant accepte une prop optionnelle teamMembers
export const TeamBlock: React.FC<{ teamMembers?: TeamMember[] }> = ({
  teamMembers = defaultTeamMembers,
}) => {
  return (
    <section className="py-16 shadow-lg">
      <div className="container pt-20 pb-16 md:pt-28 md:pb-20 lg:pt-28 lg:pb-20 xl:pt-28 xl:pb-20">
        <div className="mx-[-15px] !mt-[-50px] flex flex-wrap items-center lg:mx-[-20px] xl:mx-[-35px]">
          <div className="!mt-[50px] w-full max-w-full flex-[0_0_auto] border border-red-500 !px-[15px] lg:w-4/12 lg:!px-[20px] xl:w-4/12 xl:!px-[35px]">
            <h2 className="text-line relative !mb-3 inline-flex !pl-[1.4rem] align-top !text-[.75rem] !leading-[1.35] !tracking-[0.02rem] !text-[#3f78e0] uppercase before:absolute before:top-2/4 before:left-0 before:inline-block before:h-[0.05rem] before:w-3 before:translate-y-[-60%] before:bg-[#3f78e0] before:content-['']">
              Rencontrez l'Équipe
            </h2>
            <h3 className="!mb-5 !text-[calc(1.285rem_+_0.42vw)] !leading-[1.3] font-bold xl:!text-[1.6rem]">
              Économisez votre temps et votre argent en choisissant notre équipe
              professionnelle.
            </h3>
            <p>
              Donec id elit non mi porta gravida at eget metus. Morbi leo risus,
              porta ac consectetur ac, vestibulum at eros tempus porttitor.
            </p>
            <a
              href="#"
              className="btn btn-primary !mt-3 !rounded-[50rem] border-[#3f78e0] !bg-[#3f78e0] !text-white hover:translate-y-[-0.15rem] hover:!border-[#3f78e0] hover:bg-[#3f78e0] hover:text-white hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] active:border-[#3f78e0] active:bg-[#3f78e0] active:text-white disabled:border-[#3f78e0] disabled:bg-[#3f78e0] disabled:text-white"
            >
              Voir Tous les Membres
            </a>
          </div>
          {/*column */}
          <div className="!mt-[50px] w-full max-w-full flex-[0_0_auto] border border-blue-500 !px-[15px] lg:w-8/12 lg:!px-[20px] xl:w-8/12 xl:!px-[35px]">
            <div
              className="swiper-container !mb-6 !text-center"
              data-margin="30"
              data-dots="true"
              data-items-xl="3"
              data-items-md="2"
              data-items-xs="1"
            >
              <div className="swiper">
                <div className="swiper-wrapper">
                  {teamMembers.map((member, idx) => (
                    <div className="swiper-slide" key={idx}>
                      <img
                        className="!mx-auto !mb-4 w-40 rounded-[50%]"
                        src={member.image.src}
                        srcSet={member.image.srcSet}
                        alt={member.name}
                      />
                      <h4 className="!mb-1">{member.name}</h4>
                      <div className="!mb-2 !text-[0.65rem] font-bold !tracking-[0.02rem] !text-[#aab0bc] uppercase">
                        {member.role}
                      </div>
                      <p className="!mb-2">{member.description}</p>
                      <nav className="nav social !mb-0 justify-center !text-center">
                        {member.socials.map((social, sidx) => (
                          <a
                            key={sidx}
                            className="m-[0_.7rem_0_0] translate-y-0 text-[1rem] transition-all duration-[0.2s] ease-in-out hover:translate-y-[-0.15rem]"
                            href={social.url}
                          >
                            <i
                              className={`uil ${social.icon} text-[1rem]`}
                              style={{ color: social.color }}
                            ></i>
                          </a>
                        ))}
                      </nav>
                    </div>
                  ))}
                </div>
                {/*/.swiper-wrapper */}
              </div>
              {/* /.swiper */}
              <div className="swiper-pagination"></div>
              <div className="swiper-navigation">
                <div className="swiper-button swiper-button-prev"></div>
                <div className="swiper-button swiper-button-next"></div>
              </div>
            </div>
            {/* /.swiper-container */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
    </section>
  )
}
