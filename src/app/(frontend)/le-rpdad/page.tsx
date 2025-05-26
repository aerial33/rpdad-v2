import { DotPattern } from '@/components/DotPattern'
import { FadeLeft } from '@/components/motion/animations'
import { FeatureCard } from '@/components/tmp/FeaturedCard'
import { FeatureSection } from '@/components/tmp/FeatureSection'
import { HistoryAbout } from '@/components/tmp/HistoryAbout'
import { SectionHeader } from '@/components/tmp/SectionHeader'
import { TeamsCaroussel } from '@/components/tmp/teams/'
import { Badge } from '@/components/ui/badge'
import { CircleCheck } from 'lucide-react'

const LeRPDAD = () => {
  return (
    <div>
      <section className="from-primary-lightest to-flamingo-lightest bg-gradient-to-t ">
        <FadeLeft className="mx-auto flex max-w-7xl gap-6 py-8 md:pt-16 justify-center h-[50vh]">
          <div className="hidden grid-cols-2 grid-rows-2 gap-4 px-4 lg:grid">
            <DotPattern
              className="col-span-1 row-start-1"
              dotColor="bg-primary"
              dotSize="lg"
              rows={7}
              cols={5}
            />
            <DotPattern
              className="col-span-1 col-start-2 row-start-2"
              dotColor="bg-flamingo"
              rows={6}
              cols={6}
            />
          </div>
          <div className="flex flex-col items-start px-4 py-6 sm:py-8 lg:items-center lg:px-0">
            <Badge variant="secondary" className="mb-4 text-white uppercase">
              <span className="font-bold">Le RPDAD</span>
            </Badge>
            <h1 className="text-foreground mb-4 max-w-4xl text-4xl font-semibold text-balance lg:text-center lg:text-5xl lg:leading-tight">
              {'Le RPDAD'}
            </h1>
            <p className="text-muted-foreground text-[1.05rem] leading-[1.6] font-medium text-balance">
              {"Le Réseau Public Départemental d'Aide à Domicile de la Gironde"}
            </p>
          </div>
          <div className="hidden grid-cols-2 grid-rows-2 gap-4 px-4 md:grid">
            <DotPattern
              className="col-span-1 col-start-1 row-start-2"
              dotColor="bg-primary"
              rows={6}
              cols={6}
            />
            <DotPattern
              className="col-span-1 col-start-2 row-start-1"
              dotColor="bg-picton-blue-light"
              dotSize="lg"
              rows={7}
              cols={5}
            />
          </div>
        </FadeLeft>

        <div className="before:to-primary-lightest before:border-flamingo-lightest relative border-0 bg-gradient-to-bl before:absolute before:top-[-4rem] before:right-0 before:z-0 before:block before:border-0 before:border-t-[4rem] before:border-r-[100vw] before:!border-y-transparent before:border-l-transparent before:bg-gradient-to-bl before:content-[''] after:absolute after:right-0 after:bottom-[-4rem] after:z-0 after:block after:border-0 after:border-r-[100vw] after:!border-y-transparent after:border-l-transparent after:bg-gradient-to-bl after:content-['']"></div>
      </section>
      {/* <HeroSelector
        variant="logo"
        title="Le Réseau Public Départemental d'Aide à Domicile de la Gironde"
        description="La présentation du Réseau Public Départemental d'Aide à Domicile de la Gironde"
      /> */}

      <section className="py-4">
        <div className="container mx-auto px-4 py-[4.5rem] md:!py-24 lg:!py-24 xl:!py-24">
          <FeatureSection
            title="Editorial"
            mainText="Un service public de proximité au cœur de la Gironde"
            secondaryText={[
              'Autorisé par le Conseil Départemental de la Gironde, le RPDAD de la Gironde accompagne près de 5000 personnes âgées et/ou personnes en situation de handicap qui choisissent de vivre à domicile. Nos agents de la fonction publique vous aident et vous accompagnent dans les actes de la vie quotidienne, dans un esprit de coopération avec vous et avec les autres acteurs qui interviennent auprès de vous.',
              "Avec vous, nous souhaitons construire des solutions individuelles adaptées à votre projet et vos besoins, pour faciliter votre quotidien, préserver l'autonomie et développer le pouvoir de dire et d'agir. Les 32 services qui participent à notre Réseau Public sont engagés dans une démarche d'innovation, de progrès, de professionnalisation et de qualité de vie au travail pour nos 1200 agents, garantissant la qualité des prestations et visant la satisfaction de tous : bénéficiaires et professionnels.",
              "À l'heure où le choix de la vie à domicile est une priorité, l'accompagnement de ces personnes et des aidants constitue un investissement essentiel pour notre société. La force d'un réseau public de proximité est d'être à vos côtés.",
            ]}
            // secondaryText="Autorisé par le Conseil Départemental de la Gironde, le RPDAD de la Gironde accompagne près de 5000 personnes âgées et/ou personnes en situation de handicap qui choisissent de vivre à domicile. Nos agents de la fonction publique vous aident et vous accompagnent dans les actes de la vie quotidienne, dans un esprit de coopération avec vous et avec les autres acteurs qui interviennent auprès de vous."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 409.6 362.5"
                data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/megaphone.svg"
                className="svg-inject icon-svg icon-svg-md !mb-4 !h-[2.6rem] !w-[2.6rem]"
              >
                <path
                  className="fill-primary-darker"
                  d="M343.4 302.9L61 302.5c-25.3-.2-47.5-16.8-54.8-40.9l-3.9-12.9c-7.1-24.2 2.5-50.3 23.5-64.2L262.1 29.8c5.7-3.7 13.3-2.1 17 3.6.7 1 1.2 2.1 1.5 3.2l74.3 249.8c2.4 6.4-.9 13.5-7.3 15.8-1.3.5-2.8.7-4.2.7zM261.8 59.4L39.3 205c-12 7.9-17.4 22.8-13.4 36.6l3.8 12.9c4.2 13.8 16.8 23.3 31.2 23.4l265.8.4-64.9-218.9z"
                ></path>
                <path
                  className="fill-primary-darker"
                  d="M138 362.5c-40.4 0-72.8-31.1-73.6-70.8 0-6.8 5.5-12.3 12.3-12.3 6.6 0 12.1 5.2 12.3 11.8.6 26.2 22.1 46.7 49 46.7 14.2 0 27.7-6.2 37-16.9 4.5-5.1 12.2-5.7 17.4-1.2 5.1 4.5 5.7 12.2 1.2 17.4-14 16.1-34.3 25.3-55.6 25.3z"
                ></path>
                <path
                  className="fill-flamingo"
                  d="M183.4 96l57.8 194.5 102.1.1-74.5-250.5L183.4 96z"
                ></path>
                <path
                  className="fill-primary-darker"
                  d="M343.4 302.9l-102.1-.1c-5.4 0-10.2-3.6-11.8-8.8L171.6 99.5c-1.6-5.2.5-10.8 5.1-13.8l85.4-55.9c5.7-3.7 13.3-2.1 17 3.6.7 1 1.2 2.1 1.5 3.2l74.5 250.6c1.9 6.5-1.8 13.4-8.3 15.3-1.1.2-2.3.4-3.4.4zm-92.9-24.7l76.4.1-65.1-218.9-63.9 41.8 52.6 177z"
                ></path>
                <path
                  className="fill-primary-darker"
                  d="M351.8 330.6c-5.4 0-10.2-3.6-11.8-8.8l-91-306c-2.1-6.5 1.3-13.4 7.8-15.6 6.5-2.1 13.4 1.3 15.6 7.8.1.3.2.5.2.8l91 305.9c1.9 6.5-1.8 13.4-8.3 15.3-1.1.4-2.3.6-3.5.6zM338 91.7c-6.8 0-12.3-5.5-12.3-12.3 0-1.8.4-3.6 1.2-5.3l13.4-28.5c2.9-6.2 10.2-8.8 16.4-5.9 6.2 2.9 8.8 10.2 5.9 16.4l-13.4 28.5c-2.1 4.3-6.4 7.1-11.2 7.1zm28.2 64.9c-6.8 0-12.3-5.5-12.3-12.3 0-5.7 3.9-10.6 9.4-12l31.1-7.5c6.6-1.5 13.2 2.6 14.7 9.3 1.5 6.5-2.5 13-9 14.7l-31.2 7.4c-.8.3-1.8.4-2.7.4zm29.1 90c-2.7 0-5.4-.9-7.5-2.6l-24.9-19.4c-5.4-4.2-6.3-11.9-2.2-17.3s11.9-6.3 17.3-2.2l24.9 19.4c5.4 4.2 6.3 11.9 2.1 17.3-2.3 3-5.9 4.7-9.7 4.8z"
                ></path>
              </svg>
            }
            imageUrls={[
              'https://sandbox-tailwind-template.netlify.app/assets/img/photos/about2.jpg',
              'https://sandbox-tailwind-template.netlify.app/assets/img/photos/about3.jpg',
            ]}
            bulletLists={[
              [
                'Représenter et défendre les SAD publics',
                'Harmoniser les pratiques en terme RH, budgétaire et prévention',
                'Favoriser la QVT et le maintien dans l’emploi',
              ],
              [
                'Renforcer la qualité de service des SAD membres',
                'Conduire un projet de service en accord avec les enjeux des SAD publics',
                'Soutenir et accompagner les projets de développement territorial liés aux SAAD publics',
              ],
            ]}
            bulletIcon={
              <CircleCheck
                stroke="oklch(65.46% 0.149 337.91)"
                width={24}
                height={24}
                className="absolute top-[0.2rem] -left-2 flex rounded-full bg-white"
              />
            }
          />
          {/*<!--/.row -->*/}
          <SectionHeader
            className="pt-16"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 447"
                data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/list.svg"
                className="svg-inject icon-svg icon-svg-md m-[0_auto] !mb-4 !h-[2.6rem] !w-[2.6rem]"
              >
                <path
                  className="fill-primary-dark"
                  d="M102.4 447C45.8 447 0 401.1 0 344.6s45.9-102.4 102.4-102.4c36.3 0 69.9 19.2 88.3 50.5 4.1 6.9 1.8 15.8-5.2 19.9-6.9 4.1-15.8 1.8-19.9-5.2-20.5-34.9-65.4-46.6-100.3-26.1s-46.6 65.4-26.1 100.3 65.4 46.6 100.3 26.1c10.2-6 18.8-14.3 25-24.3 4.3-6.8 13.2-8.9 20.1-4.6 6.8 4.3 8.9 13.2 4.6 20.1-18.7 30-51.5 48.2-86.8 48.1zm395.1-119.8H254.3c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h243.1c8 .2 14.4 6.9 14.2 14.9-.2 7.8-6.4 14-14.1 14.2zm-91.2 63.9h-152c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h152c8 .2 14.4 6.9 14.2 14.9-.2 7.7-6.5 14-14.2 14.2z"
                ></path>
                <circle className="fill-flamingo" cx="102.4" cy="102.4" r="87.8"></circle>
                <path
                  className="fill-primary-dark"
                  d="M102.4 204.8C45.8 204.8 0 158.9 0 102.4S45.8 0 102.4 0s102.4 45.8 102.4 102.4c-.1 56.5-45.9 102.3-102.4 102.4zm0-175.7c-40.5 0-73.3 32.8-73.3 73.3s32.8 73.3 73.3 73.3 73.3-32.8 73.3-73.3c-.1-40.5-32.9-73.2-73.3-73.3zM497.5 85H254.3c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h243.1c8 .2 14.4 6.9 14.2 14.9-.2 7.8-6.4 14-14.1 14.2zm-91.2 63.8h-152c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h152c8 .2 14.4 6.9 14.2 14.9-.2 7.8-6.5 14-14.2 14.2z"
                ></path>
              </svg>
            }
            title="Les étapes clés de notre accompagnement"
          />

          <div className="mx-[-15px] !mt-[-50px] flex flex-wrap items-center lg:mx-[-20px] xl:mx-[-35px]">
            <div className="!mt-[50px] w-full max-w-full flex-[0_0_auto] !px-[15px] lg:!order-2 lg:w-6/12 lg:!px-[20px] xl:!order-2 xl:w-6/12 xl:!px-[35px]">
              <FeatureCard
                number="01"
                title="Système d'information"
                description="Un système d'information commun et un pilotage global (smarphones, télégestion, plannification, faturation)"
                numberBgClass="bg-chateau-lighter text-chateau-base"
                className="border-chateau-base  max-w-[580px] lg:mr-6 xl:mr-6"
              />
              <FeatureCard
                number="02"
                title="Représenter et défendre les SAD publics"
                description="Une plateforme d’astreinte 24/24 et 7/7 pour garantir la continuité de service pour les intervenants et bénéficiaires"
                numberBgClass="bg-primary-lighter text-primary"
                className="border-primary mt-6 max-w-[580px] lg:ml-16 xl:ml-16"
              />
              <FeatureCard
                number="03"
                title="Développement des services"
                description="Un projet de service commun et des outils réglementaires partagés"
                numberBgClass="bg-yellow-lighter text-yellow-base"
                className="border-yellow-base mt-6 max-w-[580px] lg:mx-6 xl:mx-6"
              />
            </div>

            <div className="!mt-[50px] w-full max-w-full flex-[0_0_auto] !px-[15px] lg:!order-2 lg:w-6/12 lg:!px-[20px] xl:!order-2 xl:w-6/12 xl:!px-[35px]">
              <FeatureCard
                number="04"
                title="Pilotage et accompagnement"
                description="Un pilotage budgétaire et un accompagnement qualité pour tous nos services"
                numberBgClass="bg-primary-lighter text-primary"
                className="border-primary max-w-[580px] lg:mr-6 xl:mr-6"
              />
              <FeatureCard
                number="05"
                title="Harmoniser les pratiques en terme RH, budgétaire et prévention"
                description="Un plan de formation professionnalisé, commun, délocalisé et adapté aux besoins des professionnels"
                numberBgClass="bg-picton-blue-lighter text-picton-blue"
                className="border-picton-blue mt-6 max-w-[580px] lg:ml-16 xl:ml-16"
              />
              <FeatureCard
                number="06"
                title="Projets innovants"
                description="Un échange de pratique et des projets novateurs..."
                numberBgClass="bg-flamingo-lighter text-flamingo"
                className="border-flamingo mt-6 max-w-[580px] lg:mx-6 xl:mx-6"
              />
            </div>
          </div>
          {/*<!--/.row -->*/}
        </div>
      </section>
      <HistoryAbout />
      <TeamsCaroussel />
    </div>
  )
}
export default LeRPDAD
