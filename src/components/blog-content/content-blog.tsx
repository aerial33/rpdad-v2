import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { Post } from '@/payload-types'
import { formatDateTime } from '@/utilities/formatDateTime'

interface PostContentProps {
  post: Post
}

export const PostContent = ({ post }: PostContentProps) => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section avec image de fond si disponible */}
      {post.heroImage && (
        <div className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            <Media resource={post.heroImage} className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="container mx-auto max-w-7xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-2xl">
                {post.title}
              </h1>
              {post.publishedAt && (
                <div className="flex items-center gap-2 text-lg opacity-90 drop-shadow-lg">
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  {formatDateTime(post.publishedAt)}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <section className="relative">
        <div className="container mx-auto flex max-w-7xl flex-col items-start gap-12 px-6 py-12 md:flex-row lg:gap-16">
          {/* Sidebar moderne avec design glassmorphism */}
          <aside className="w-full md:w-80 lg:w-96 shrink-0">
            <div className="sticky top-8 space-y-6">
              {/* Card principale avec effet glassmorphism */}
              <div className="glassmorphism dark:glassmorphism-dark rounded-2xl shadow-2xl shadow-blue-500/10 p-8 hover-lift">
                {!post.heroImage && (
                  <div className="mb-8">
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                      {post.title}
                    </h1>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Date de publication avec icône */}
                  {post.publishedAt && (
                    <div className="flex items-start gap-3 group">
                      <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-all duration-300 group-hover:scale-110">
                        <svg
                          className="w-5 h-5 text-blue-600 dark:text-blue-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                          Date de publication
                        </div>
                        <div className="text-slate-600 dark:text-slate-300 text-sm">
                          {formatDateTime(post.publishedAt)}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Catégories avec badges modernes */}
                  {post.categories &&
                    Array.isArray(post.categories) &&
                    post.categories.length > 0 && (
                      <div className="flex items-start gap-3 group">
                        <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/30 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/40 transition-all duration-300 group-hover:scale-110">
                          <svg
                            className="w-5 h-5 text-purple-600 dark:text-purple-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900 dark:text-white text-sm mb-3">
                            Catégories
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {post.categories?.map((category, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer"
                              >
                                ✨ {typeof category === 'object' ? category.title : category}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                  {/* Auteurs avec avatars */}
                  {post.populatedAuthors &&
                    Array.isArray(post.populatedAuthors) &&
                    post.populatedAuthors.length > 0 && (
                      <div className="flex items-start gap-3 group">
                        <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/30 group-hover:bg-green-200 dark:group-hover:bg-green-800/40 transition-all duration-300 group-hover:scale-110">
                          <svg
                            className="w-5 h-5 text-green-600 dark:text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900 dark:text-white text-sm mb-3">
                            {(post.populatedAuthors?.length ?? 0) > 1 ? 'Auteurs' : 'Auteur'}
                          </div>
                          <div className="space-y-3">
                            {post.populatedAuthors?.map((author, index) => (
                              <div
                                key={author.id}
                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors duration-200"
                              >
                                <div className="relative">
                                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                                    {author.name?.charAt(0).toUpperCase() || '?'}
                                  </div>
                                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
                                </div>
                                <div>
                                  <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold block">
                                    {author.name || 'Auteur inconnu'}
                                  </span>
                                  <span className="text-xs text-slate-500 dark:text-slate-400">
                                    Contributeur
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                </div>
              </div>

              {/* Stats card */}
              <div className="glassmorphism dark:glassmorphism-dark rounded-2xl p-6 hover-lift">
                <div className="text-center">
                  <div className="text-4xl mb-3">📚</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 font-semibold">
                    Article de blog
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Lecture recommandée
                  </div>
                </div>
              </div>

              {/* Card de partage social */}
              <div className="glassmorphism dark:glassmorphism-dark rounded-2xl p-6 hover-lift">
                <div className="text-center mb-4">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    Partager cet article
                  </div>
                  <div className="flex justify-center gap-3">
                    <button className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-200 hover:scale-110 shadow-lg">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </button>
                    <button className="p-3 rounded-full bg-blue-700 hover:bg-blue-800 text-white transition-all duration-200 hover:scale-110 shadow-lg">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </button>
                    <button className="p-3 rounded-full bg-green-600 hover:bg-green-700 text-white transition-all duration-200 hover:scale-110 shadow-lg">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.768.967-.223.331-.4.374-.719.124-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Contenu principal moderne */}
          <article className="flex-1 min-w-0 bg-white rounded-2xl shadow">
            <div className="glassmorphism dark:glassmorphism-dark rounded-2xl shadow-2xl shadow-blue-500/5 overflow-hidden hover-lift">
              {/* En-tête de l'article si pas d'image hero */}
              {!post.heroImage && (
                <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-8 text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 drop-shadow-lg">
                      {post.title}
                    </h1>
                    {post.publishedAt && (
                      <div className="flex items-center gap-3 text-white/90">
                        <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="font-medium">{formatDateTime(post.publishedAt)}</span>
                      </div>
                    )}
                  </div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
                </div>
              )}

              {/* Contenu de l'article */}
              <div className="p-8 md:p-12">
                <div
                  className="prose prose-lg dark:prose-invert max-w-none
                  prose-headings:text-slate-900 dark:prose-headings:text-white
                  prose-headings:font-bold prose-headings:tracking-tight
                  prose-h1:text-4xl prose-h1:mb-8 prose-h1:bg-gradient-to-r prose-h1:from-blue-600 prose-h1:to-purple-600 prose-h1:bg-clip-text prose-h1:text-transparent
                  prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-12 prose-h2:text-slate-800 dark:prose-h2:text-slate-200
                  prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8 prose-h3:text-slate-700 dark:prose-h3:text-slate-300
                  prose-p:text-slate-700 dark:prose-p:text-slate-300
                  prose-p:leading-relaxed prose-p:text-lg prose-p:mb-6
                  prose-a:text-blue-600 dark:prose-a:text-blue-400
                  prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                  prose-strong:text-slate-900 dark:prose-strong:text-white prose-strong:font-semibold
                  prose-code:text-pink-600 dark:prose-code:text-pink-400
                  prose-code:bg-pink-50 dark:prose-code:bg-pink-900/20
                  prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:font-medium
                  prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50/50 dark:prose-blockquote:bg-blue-900/10
                  prose-blockquote:italic prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg
                  prose-ul:space-y-2 prose-ol:space-y-2
                  prose-li:text-slate-700 dark:prose-li:text-slate-300 prose-li:leading-relaxed
                  prose-img:rounded-2xl prose-img:shadow-2xl prose-img:my-8
                "
                >
                  <RichText data={post.content} enableGutter={false} />
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default PostContent
