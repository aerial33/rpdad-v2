import Link from "next/link"

import { Emploi } from "@/lib/emplois/emplois-data"

export const BlogSection = ({ emploi }: { emploi: Emploi }) => {
  return (
    <section>
      <div className="container mx-auto flex max-w-7xl flex-col items-center pt-4 pb-8 md:flex-row md:pt-8 md:pb-10 lg:pb-16">
        <aside className="top-20 mb-8 w-full self-start p-4 pt-8 md:sticky md:mr-8 md:w-fit md:min-w-[16rem] md:flex-1 lg:max-w-[18rem] lg:shrink-0 2xl:w-full">
          <div className="mb-8 flex w-full max-w-fit flex-col pl-4 md:mb-10">
            <div className="hidden w-full md:mt-1 md:block">
              <div className="flex w-full items-center space-x-6">
                <Link
                  href="#"
                  className="transition-transform hover:-translate-y-0.5"
                >
                  <svg
                    className="theme-dark:text-pink-400 size-5 text-pink-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="transition-transform hover:-translate-y-0.5"
                >
                  <svg
                    className="theme-dark:text-blue-500 size-5 text-blue-700"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-border theme-dark:border-zinc-700 theme-dark:bg-zinc-600 flex flex-col rounded-xl border bg-zinc-100 py-6 md:py-8">
            <div className="theme-dark:text-zinc-100 mb-6 px-6 leading-5 font-medium md:mb-4.5">
              {`${emploi.service}`}
            </div>
            <div className="mb-5 px-6 last:mb-0">
              <div className="theme-dark:text-zinc-400 overflow-hidden text-xs text-zinc-600 md:text-sm">
                {`${emploi.contrat} - ${emploi.temps}`}
              </div>
            </div>
            <div className="mb-5 px-6 last:mb-0">
              <div className="theme-dark:text-zinc-200 mb-2 text-xs font-semibold">
                {"Contact"}
              </div>
              <div className="theme-dark:text-zinc-400 overflow-hidden text-xs text-zinc-600 md:text-sm">
                {`${emploi.contact.responsable}`}
                <br />
                {`${emploi.contact.email}`}
                <br />
                {`${emploi.contact.telephone}`}
              </div>
            </div>
            <div className="border-border theme-dark:border-zinc-700 mb-5 border-t px-6 pt-5 last:mb-0">
              <div className="theme-dark:text-zinc-200 mb-2 text-xs font-semibold">
                {"Adresse"}
              </div>
              <div className="theme-dark:text-zinc-400 overflow-hidden text-xs text-zinc-600 md:text-sm">
                {`${emploi.contact.adresse}`}
              </div>
            </div>
            <div className="mb-5 px-6 last:mb-0">
              <div className="theme-dark:text-zinc-200 mb-2 text-xs font-semibold">
                {"Avantages"}
              </div>
              <div className="theme-dark:text-zinc-400 overflow-hidden text-xs text-zinc-600 md:text-sm">
                {`${emploi.avantages}`}
              </div>
            </div>
            <div className="mb-5 px-6 last:mb-0">
              <div className="theme-dark:text-zinc-200 mb-2 text-xs font-semibold">
                {"Postuler"}
              </div>
              <div className="theme-dark:text-zinc-400 overflow-hidden text-xs text-zinc-600 md:text-sm">
                <Link
                  href={`mailto:${emploi.contact.email}?subject=Candidature%20${emploi.titre}%20-%20${emploi.service}`}
                  className="hover:text-foreground theme-dark:hover:text-zinc-300 underline"
                >
                  {"Envoyer votre candidature"}
                </Link>
              </div>
            </div>
          </div>
        </aside>
        <article className="prose prose-sm md:prose-base theme-dark:prose-invert mx-auto px-4 pt-8">
          <h1>{`${emploi.titre} - ${emploi.service}`}</h1>

          <div className="mb-8 rounded-lg bg-gray-50 p-4">
            <h2 className="mt-0">Description du poste</h2>
            <p>{emploi.description}</p>
          </div>

          <h2>Profil recherché</h2>
          <p>{emploi.profil}</p>

          <h2>Le service</h2>
          <p>
            {
              "Ce service intervient auprès de personnes retraitées ou en situation de handicap qui rencontrent des difficultés dans l'accomplissement des actes essentiels de la vie courante."
            }
          </p>

          <h3>Missions principales</h3>
          <ul>
            <li>
              Aide à la personne dans les actes essentiels de la vie quotidienne
            </li>
            <li>
              Aide à la personne dans les actes ordinaires de la vie quotidienne
            </li>
            <li>
              Aide à la personne dans les activités sociales et relationnelles
            </li>
            <li>
              Participation à la prévention de la maltraitance des personnes
              vulnérables
            </li>
          </ul>

          <h3>Compétences requises</h3>
          <ul>
            <li>Connaissance du secteur médico-social</li>
            <li>Sens de l'organisation et autonomie</li>
            <li>Capacité d'adaptation</li>
            <li>Discrétion professionnelle</li>
            <li>Bonnes capacités relationnelles</li>
          </ul>

          <div className="mt-12 flex items-center justify-center">
            <Link
              href={`mailto:${emploi.contact.email}?subject=Candidature%20${emploi.titre}%20-%20${emploi.service}`}
              className="bg-primary hover:bg-primary/90 rounded-lg px-6 py-3 text-white"
            >
              Postuler à cette offre
            </Link>
          </div>
        </article>
      </div>
    </section>
  )
}

export default BlogSection
