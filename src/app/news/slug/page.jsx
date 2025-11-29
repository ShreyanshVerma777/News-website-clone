import Image from "next/image";

import { notFound } from "next/navigation";
import { getArticleBySlug, getAllArticles } from "@/data/articles";

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export default function ArticlePage({ params }) {
  const article = getArticleBySlug(params.slug);

  if (!article) return notFound();

  return (
    <article className="bg-white shadow-lg rounded-lg p-6 mt-4 mx-auto max-w-3xl">
      <span className="text-xs uppercase text-red-600 font-bold">
        {article.category}
      </span>

      <h1 className="text-3xl font-bold mt-2 mb-3">
        {article.title}
      </h1>

      <p className="text-xs text-gray-500 mb-4">
        {article.author} • {new Date(article.date).toLocaleString("en-IN")}
      </p>

      {article.imageUrl && (
        <div className="relative h-72 w-full mb-5 rounded overflow-hidden">
          <Image src={article.imageUrl} alt={article.title} fill className="object-cover" />
        </div>
      )}

      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
        {article.content}
      </p>
    </article>
  );
}
