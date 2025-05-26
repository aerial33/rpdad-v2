import Link from "next/link"

interface ContentBlogProps {
  service?: string
  // autres props existantes...
}

export const BlogSection = ({ service }: ContentBlogProps) => {
  return (
    <section>
      <div className="container mx-auto flex max-w-7xl flex-col items-center pt-4 pb-8 md:flex-row md:pt-8 md:pb-10 lg:pb-16">
        <aside className="top-20 mb-8 w-full self-start pt-8 md:sticky md:mr-8 md:w-fit md:min-w-[16rem] md:flex-1 lg:max-w-[18rem] lg:shrink-0 2xl:w-full">
          <div className="mb-8 flex w-full max-w-fit shrink-0 flex-col md:mb-10">
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
                <Link
                  href="#"
                  className="transition-transform hover:-translate-y-0.5"
                >
                  <svg
                    className="theme-dark:text-orange-400 size-5 text-orange-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 6.628 5.374 12 12 12 6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12zm.869 5.903l3.114 4.567-.975.665-3.115-4.567.976-.665zm-2.812 2.585l4.84 2.838-.6 1.017-4.842-2.838.602-1.017zm-1.276 2.724l5.413 1.521-.291 1.077-5.428-1.458.306-1.14zm-.588 2.461l5.687.569-.099 1.127-5.687-.569.099-1.127zm-.169 2.16h5.736v1.129h-5.736v-1.129zm7.304 3.164c-1.826 0-3.64-.521-3.64-2.613 0-.097.002-.188.006-.281.01-.239.016-.498.016-.811 0-.518-.006-.97-.018-1.355h-2.307c.013.385.018.837.018 1.355 0 .313-.006.572-.016.811-.004.093-.006.184-.006.281 0 2.092-1.814 2.613-3.64 2.613-.31 0-.62-.023-.929-.068l.147-1.114c.239.031.487.046.746.046 1.229 0 1.526-.289 1.526-1.478 0-.097-.002-.191-.006-.287-.01-.236-.016-.492-.016-.799 0-.518.006-.97.018-1.355h-2.073v-1.129h5.736v1.129h-2.073c.013.385.018.837.018 1.355 0 .307-.006.563-.016.799-.004.096-.006.19-.006.287 0 1.189.297 1.478 1.526 1.478.259 0 .507-.015.746-.046l.147 1.114c-.309.045-.619.068-.929.068z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="transition-transform hover:-translate-y-0.5"
                >
                  <svg
                    className="theme-dark:text-sky-400 size-5 text-sky-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-border theme-dark:border-zinc-700 theme-dark:bg-zinc-600 flex flex-col rounded-xl border bg-zinc-100 py-6 md:py-8">
            <div className="theme-dark:text-zinc-100 mb-6 px-6 leading-5 font-medium md:mb-4.5">
              {`${service}`}
            </div>
            <div className="mb-5 px-6 last:mb-0">
              <div className="theme-dark:text-zinc-400 overflow-hidden text-xs text-zinc-600 md:text-sm">
                {
                  "Une plateforme d'astreinte téléphonique prend le relai en dehors des heures d'ouverture au public, ainsi que les week-end et jours fériés"
                }
              </div>
            </div>
            <div className="mb-5 px-6 last:mb-0">
              <div className="theme-dark:text-zinc-200 mb-2 text-xs font-semibold">
                {"Horaire d'accueil"}
              </div>
              <div className="theme-dark:text-zinc-400 overflow-hidden text-xs text-zinc-600 md:text-sm">
                {"Du lundi au vendredi de 8h00 à 12h00 et de 14h00 à 18h00"}
                <br />
                {"Le vendredi de 8h00 à 12h00 et de 14h00 à 17h00"}
              </div>
            </div>
            <div className="border-border theme-dark:border-zinc-700 mb-5 border-t px-6 pt-5 last:mb-0">
              <div className="theme-dark:text-zinc-200 mb-2 text-xs font-semibold">
                {"Adresse"}
              </div>
              <div className="theme-dark:text-zinc-400 overflow-hidden text-xs text-zinc-600 md:text-sm">
                {`${service}, Gironde`}
              </div>
            </div>
            <div className="mb-5 px-6 last:mb-0">
              <div className="theme-dark:text-zinc-200 mb-2 text-xs font-semibold">
                {"Hôtel de ville"}
              </div>
              <div className="theme-dark:text-zinc-400 overflow-hidden text-xs text-zinc-600 md:text-sm">
                {"7 rue Pierre Pauilhac – 33740 ARES"}
              </div>
            </div>
            <div className="mb-5 px-6 last:mb-0">
              <div className="theme-dark:text-zinc-200 mb-2 text-xs font-semibold">
                {"Site Internet"}
              </div>
              <div className="theme-dark:text-zinc-400 overflow-hidden text-xs text-zinc-600 md:text-sm">
                <Link
                  href="#"
                  className="hover:text-foreground theme-dark:hover:text-zinc-300 underline"
                >
                  {"www.ville-ares.fr"}
                </Link>
              </div>
            </div>
          </div>
        </aside>
        <article className="prose prose-sm theme-dark:prose-invert mx-auto pt-8">
          <h1>{`Service d'Aide et d'Accompagnement à Domicile du ${service}`}</h1>
          <h2>{"Le mot d'accueil"}</h2>
          <p>
            {
              "Vous venez de rejoindre le Service d’Aide et d’Accompagnement à Domicile d’Arès. Vous allez ainsi bénéficier des services de nos agents qualifiés. Nous vous remercions de la confiance que vous nous accordez et vous souhaitons la bienvenue !"
            }
          </p>
          <p>
            {
              "Rester chez soi le plus longtemps et dans les meilleures conditions possible est le vœu le  plus cher de chacun d’entre-nous. Pour répondre à ce besoin, avec beaucoup de dévouement les dix aides à domicile de notre service sont en mesure d’apporter leur soutien aussi bien pratique que psychologique à toutes  personnes pouvant bénéficier de ce service : retraités, et (ou) personnes en situation de handicap, bénéficiaires de l’ARDH (Aide au Retour à Domicile après Hospitalisation).Compenser la perte d'autonomie, maintenir le lien social, préserver les repères de la personne, tels sont les objectifs essentiels de notre service afin d’assurer un maintien à domicile de qualité et le plus pérenne possible."
            }
          </p>
          <h2>{"Le service"}</h2>
          <p>
            {
              "Ce service intervient auprès de personnes retraitées ou en situation de handicap qui rencontrent des difficultés dans l'accomplissement des actes essentiels de la vie courante. Dix aides à domicile apportent soutien aussi bien pratique que psychologique aux personnes bénéficiant de ce service et ce afin d'assurer le plus longtemps possible leur maintien à domicile."
            }
          </p>

          <h3>{"Vos interlocuteurs"}</h3>
          <p>
            {
              " Une responsable de service est à votre écoute pour répondre à toutes vos questions."
            }
          </p>
          <ul>
            <li>{"Une responsable équipe administrative..."}</li>
            <li>
              {
                "Un agent qualifié est à votre écoute pour répondre à toutes vos questions."
              }
            </li>
          </ul>

          <h3>{"Le champ d’intervention"}</h3>
          <p>
            {
              "Selon les plans d’aide définis, et à l’exception d’actes relevant de soins médicaux :"
            }
          </p>
          <ul>
            <li>{"Entretien du logement et travaux ménagers"}</li>
            <li>{"Entretien du linge et repassage"}</li>
            <li>{"Courses de proximité (uniquement sur la commune)"}</li>
            <li>
              {
                "Aide à la promenade et transports de personnes ayant des difficultés de déplacement vers les lieux de vie sociale"
              }
            </li>
            <li>
              {
                "Activités de stimulation de la mémoire, temps de parole et d’écoute"
              }
            </li>
            <li>{"Soutien à l’aidant"}</li>
          </ul>
          <p>
            {
              "Organisme de service à la personne enregistré sous le numéro SAP263300113 auprès de la DIRRECTE"
            }
          </p>
          <h3>{"Le mode d’intervention"}</h3>
          <p>
            {
              "Le service est assuré par des aides à domicile qualifiées et expérimentées. Elles sont accompagnées dans leur travail par un responsable de service."
            }
          </p>
          {/* <div>
            <table>
              <thead>
                <tr>
                  <th>King&#x27;s Treasury</th>
                  <th>People&#x27;s happiness</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Empty</td>
                  <td>Overflowing</td>
                </tr>
                <tr className="theme-dark:border-zinc-700 theme-dark:even:bg-zinc-800 m-0 border-t p-0 even:bg-zinc-100">
                  <td>Modest</td>
                  <td>Satisfied</td>
                </tr>
                <tr className="theme-dark:border-zinc-700 theme-dark:even:bg-zinc-800 m-0 border-t p-0 even:bg-zinc-100">
                  <td>Full</td>
                  <td>Ecstatic</td>
                </tr>
              </tbody>
            </table>
          </div> */}
          <p>
            {
              "Besoin d'informations complémentaires ? Consultez la page du service sur la plateforme SAAD du Département de la Gironde CLIQUER ICI"
            }
          </p>
        </article>
      </div>
    </section>
  )
}

export default BlogSection
