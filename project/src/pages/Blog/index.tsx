import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";

import { api } from "../../lib/api";
import type { BlogPost } from "../../types/api";

/* =========================================================
   FIGMA BLOG CONTENT
========================================================= */

const FIGMA_FEATURED_POST = {
  id: "figma-featured",
  slug: "how-artificial-intelligence-is-transforming-modern-businesses",

  title: "How Artificial Intelligence Is Transforming Modern Businesses",

  excerpt:
    "Artificial Intelligence (AI) is rapidly changing the way businesses operate, communicate, and serve their customers. Discover practical adoption strategies that drive real enterprise value.",

  category: "Technology",

  publishedAt: "Sep 30, 2026",

  author: "Zograha Team",

  readingTime: 4,

  image: "/figma/blog-ai.png",
};

const FIGMA_ADDITIONAL_POSTS = [
  {
    id: "figma-post-2",

    slug: "why-your-business-needs-a-fast-website",

    title: "Why a Modern Website Is Essential for Business Growth",

    excerpt:
      "Speed, intuitive design, and conversion-focused architecture shape first impressions and drive measurable revenue growth across digital channels.",

    category: "Business",

    publishedAt: "Sep 28, 2026",

    author: "Zograha Team",

    readingTime: 3,

    image: "/figma/blog-growth.png",
  },

  {
    id: "figma-post-3",

    slug: "digital-transformation-helping-businesses-move-forward",

    title: "Digital Transformation: Helping Businesses Move Forward",

    excerpt:
      "Modernize legacy infrastructure, automate operational workflows, and empower cross-functional teams with modern cloud enterprise platforms.",

    category: "Digital Transformation",

    publishedAt: "Sep 25, 2026",

    author: "Zograha Team",

    readingTime: 5,

    image: "/figma/blog-digital.png",
  },
];

const CATEGORIES = [
  {
    name: "All Categories",
    count: 3,
  },
  {
    name: "Technology",
    count: 1,
  },
  {
    name: "Business",
    count: 1,
  },
  {
    name: "Digital Transformation",
    count: 1,
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const [extraBackendPosts, setExtraBackendPosts] = useState<any[]>([]);

  /* =========================================================
     LOAD BACKEND BLOG POSTS
  ========================================================= */

  useEffect(() => {
    let active = true;

    api.blog
      .list()
      .then((res) => {
        if (active && res.items && res.items.length > 0) {
          const figmaSlugs = new Set([
            FIGMA_FEATURED_POST.slug,
            ...FIGMA_ADDITIONAL_POSTS.map((post) => post.slug),
          ]);

          const newPosts = res.items
            .filter((item) => !figmaSlugs.has(item.slug))
            .map((item) => ({
              id: item.id,
              slug: item.slug,
              title: item.title,
              excerpt: item.excerpt || "",
              category: item.category || "Technology",

              publishedAt: item.publishedAt
                ? new Date(item.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                : "Recent",

              author: item.author || "Zograha Team",

              readingTime: item.readingTime || 3,

              image: item.coverImage || "/figma/blog-ai.png",
            }));

          setExtraBackendPosts(newPosts);
        }
      })
      .catch(() => {});

    return () => {
      active = false;
    };
  }, []);

  /* =========================================================
     FILTERING
  ========================================================= */

  const allCards = [
    FIGMA_FEATURED_POST,
    ...FIGMA_ADDITIONAL_POSTS,
    ...extraBackendPosts,
  ];

  const matchesFilter = (post: typeof FIGMA_FEATURED_POST) => {
    const matchesCat =
      selectedCategory === "All Categories" ||
      post.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      !searchQuery.trim() ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCat && matchesSearch;
  };

  const filteredCards = allCards.filter(matchesFilter);

  const showFeatured = matchesFilter(FIGMA_FEATURED_POST);

  const remainingCards = filteredCards.filter(
    (post) => post.slug !== FIGMA_FEATURED_POST.slug,
  );

  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      <main
        className="
          flex-1
          overflow-hidden
          bg-gradient-to-b
          from-[#E3ECF9]
          via-[#F4F7FB]
          to-[#F7F9FC]
        "
      >
        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          className="reveal-on-scroll 
            relative
            mx-[8px]
            sm:mx-4
            lg:mx-6

            mt-[10px]
            sm:mt-4

            px-5
            sm:px-10
            lg:px-16

            pt-[35px]
            sm:pt-14
            lg:pt-[67px]

            pb-[31px]
            sm:pb-12
            lg:pb-[47px]

            rounded-[22px]
            sm:rounded-[30px]
            lg:rounded-[32px]

            overflow-hidden

            text-center
          "
          style={{
            background:
              "linear-gradient(135deg, #061129 0%, #0A1A3F 45%, #225DA0 100%)",
          }}
        >
          {/* Ambient glow */}

          <div
            className="
              absolute
              -top-24
              -right-24
              w-96
              h-96
              rounded-full
              blur-3xl
              opacity-20
              pointer-events-none
            "
            style={{
              background: "#3FC3D3",
            }}
          />

          <div
            className="
              absolute
              -bottom-24
              -left-24
              w-96
              h-96
              rounded-full
              blur-3xl
              opacity-25
              pointer-events-none
            "
            style={{
              background: "#1D5FA8",
            }}
          />

          {/* Desktop rings */}

          <div
            className="
              hidden
              lg:flex
              absolute
              right-[-165px]
              top-1/2
              -translate-y-1/2
              w-[520px]
              h-[520px]
              rounded-full
              border
              border-white/[0.08]
              items-center
              justify-center
            "
          >
            <div
              className="
                w-[405px]
                h-[405px]
                rounded-full
                border
                border-white/[0.06]
                flex
                items-center
                justify-center
              "
            >
              <div
                className="
                  w-[290px]
                  h-[290px]
                  rounded-full
                  border
                  border-[#62C8E1]/[0.15]
                  flex
                  items-center
                  justify-center
                "
              >
                <div
                  className="
                    w-[175px]
                    h-[175px]
                    rounded-full
                    border
                    border-white/[0.06]
                  "
                />
              </div>
            </div>
          </div>

          {/* Hero content */}

          <div
            className="
              relative
              z-10
              max-w-[850px]
              mx-auto
              flex
              flex-col
              items-center
              text-center
            "
          >
            {/* Breadcrumb */}

            <div className="mb-[13px] sm:mb-5">
              <span
                className="
                  text-[#8FA7D1]
                  text-[8px]
                  sm:text-[11px]
                  tracking-wide
                "
              >
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span className="mx-2">/</span>
                Blog
              </span>
            </div>

            {/* Badge */}

            <div
              className="
                inline-flex
                items-center
                gap-[6px]

                px-[10px]
                sm:px-3

                py-[4px]
                sm:py-[5px]

                rounded-full

                border
                border-white/20

                bg-white/[0.04]

                mb-[14px]
                sm:mb-5
              "
            >
              <span
                className="
                  w-[5px]
                  h-[5px]
                  sm:w-[6px]
                  sm:h-[6px]
                  rounded-full
                  bg-[#3FC3D3]
                "
              />

              <span
                className="
                  text-[#D8E5F5]
                  text-[7px]
                  sm:text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                "
              >
                Knowledge hub
              </span>
            </div>

            {/* Main heading */}

            <h1
              className="
                text-white
                font-bold
                tracking-[-0.035em]
                leading-[0.95]

                text-[31px]
                sm:text-[50px]
                md:text-[61px]
                lg:text-[66px]
              "
            >
              Our Blogs
            </h1>

            {/* Accent heading */}

            <h2
              className="
                text-[#7FD6E2]
                font-newsreader
                italic
                font-normal
                tracking-[-0.02em]
                leading-[0.9]

                text-[31px]
                sm:text-[50px]
                md:text-[61px]
                lg:text-[66px]

                mb-[16px]
                sm:mb-6
              "
            >
              &amp; Insights
            </h2>

            {/* Description */}

            <p
              className="
                text-[#C9D7F2]

                text-[10px]
                sm:text-[15px]
                lg:text-[16px]

                max-w-[620px]
                leading-[1.55]

                px-2
              "
            >
              Stay updated with the latest trends, insights, and innovations in
              technology, digital enterprise solutions, and business
              transformation.
            </p>
          </div>
        </section>

        {/* =====================================================
            BLOG CONTENT
        ===================================================== */}

        <section
          className="reveal-on-scroll 
            max-w-[1310px]
            mx-auto

            px-4
            sm:px-8
            lg:px-0

            mt-[28px]
            sm:mt-12
            lg:mt-[40px]

            mb-[35px]
            sm:mb-14
            lg:mb-[50px]
          "
        >
          <div
            className="
              flex
              flex-col
              lg:flex-row
              items-start

              gap-[20px]
              sm:gap-7
              lg:gap-[40px]
            "
          >
            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div
              className="
                flex-1
                w-full
                min-w-0
                flex
                flex-col
                gap-[14px]
                sm:gap-6
              "
            >
              {/* =================================================
                  FEATURED POST
              ================================================= */}

              {showFeatured && (
                <article
                  className="
                    bg-white

                    rounded-[18px]
                    sm:rounded-[25px]

                    border
                    border-[#E1E8F3]

                    overflow-hidden

                    shadow-[0_12px_28px_rgba(10,26,63,0.08)]

                    flex
                    flex-col
                    md:flex-row

                    group

                    transition-all
                    duration-300

                    hover:border-[#3FC3D3]
                  "
                >
                  {/* Featured image */}

                  <div
                    className="
                      relative
                      overflow-hidden
                      bg-[#0A1A3F]

                      w-full
                      md:w-1/2

                      h-[135px]
                      sm:h-[230px]
                      md:h-[340px]

                      shrink-0
                    "
                  >
                    <img
                      src={FIGMA_FEATURED_POST.image}
                      alt={FIGMA_FEATURED_POST.title}
                      className="
                        w-full
                        h-full
                        object-cover

                        group-hover:scale-105

                        transition-transform
                        duration-500
                      "
                    />

                    {/* Category */}

                    <div
                      className="
                        absolute
                        top-[9px]
                        left-[9px]

                        sm:top-4
                        sm:left-4

                        bg-white

                        text-[#13295C]

                        text-[7px]
                        sm:text-[10px]

                        font-bold

                        py-[4px]
                        px-[8px]

                        sm:py-1.5
                        sm:px-3

                        rounded-full

                        shadow-md
                      "
                    >
                      {FIGMA_FEATURED_POST.category}
                    </div>
                  </div>

                  {/* Featured content */}

                  <div
                    className="
                      w-full
                      md:w-1/2

                      p-[12px]
                      sm:p-6
                      md:p-7

                      flex
                      flex-col
                      justify-between
                    "
                  >
                    <div>
                      {/* Metadata */}

                      <div
                        className="
                          flex
                          items-center
                          flex-wrap
                          gap-[5px]
                          sm:gap-2

                          text-[#5B6882]

                          text-[7px]
                          sm:text-[10px]

                          font-medium

                          mb-[7px]
                          sm:mb-3
                        "
                      >
                        <span>{FIGMA_FEATURED_POST.publishedAt}</span>

                        <span className="text-[#3FC3D3]">•</span>

                        <span>{FIGMA_FEATURED_POST.author}</span>
                      </div>

                      {/* Title */}

                      <h3
                        className="
                          text-[#0E1A33]

                          text-[16px]
                          sm:text-[21px]
                          md:text-[24px]

                          font-bold

                          leading-[1.12]

                          mb-[8px]
                          sm:mb-4

                          group-hover:text-[#1D5FA8]

                          transition-colors
                        "
                      >
                        <Link to={`/blog/${FIGMA_FEATURED_POST.slug}`}>
                          {FIGMA_FEATURED_POST.title}
                        </Link>
                      </h3>

                      {/* Excerpt */}

                      <p
                        className="
                          text-[#3F4D6B]

                          text-[8px]
                          sm:text-[13px]
                          md:text-[14px]

                          leading-[1.5]

                          mb-[10px]
                          sm:mb-5
                        "
                      >
                        {FIGMA_FEATURED_POST.excerpt}
                      </p>
                    </div>

                    {/* Read link */}

                    <div
                      className="
                        pt-[8px]
                        sm:pt-3

                        border-t
                        border-[#F0F4FA]
                      "
                    >
                      <Link
                        to={`/blog/${FIGMA_FEATURED_POST.slug}`}
                        className="
                          inline-flex
                          items-center

                          text-[#1D5FA8]

                          font-bold

                          text-[9px]
                          sm:text-[13px]

                          group-hover:text-[#0A1A3F]

                          transition-colors
                        "
                      >
                        <span>Read full article</span>

                        <span
                          className="
                            ml-[6px]
                            sm:ml-2

                            w-[15px]
                            h-[15px]

                            sm:w-[22px]
                            sm:h-[22px]

                            rounded-full

                            bg-[#13295C]

                            text-white

                            flex
                            items-center
                            justify-center

                            text-[8px]
                            sm:text-[11px]
                          "
                        >
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              )}

              {/* =================================================
                  ADDITIONAL POSTS
              ================================================= */}

              {remainingCards.length > 0 && (
                <div
                  className="
                    grid
                    grid-cols-1
                    md:grid-cols-2

                    gap-[14px]
                    sm:gap-5
                  "
                >
                  {remainingCards.map((post) => (
                    <article
                      key={post.id}
                      className="
                        bg-white

                        rounded-[18px]
                        sm:rounded-[24px]

                        border
                        border-[#E1E8F3]

                        overflow-hidden

                        shadow-[0_12px_28px_rgba(10,26,63,0.08)]

                        flex
                        flex-col

                        group

                        transition-all
                        duration-300

                        hover:border-[#3FC3D3]
                      "
                    >
                      {/* Image */}

                      <div
                        className="
                          relative
                          overflow-hidden
                          bg-gray-100

                          h-[130px]
                          sm:h-[190px]
                          md:h-[220px]

                          shrink-0
                        "
                      >
                        <img
                          src={post.image}
                          alt={post.title}
                          className="
                            w-full
                            h-full
                            object-cover

                            group-hover:scale-105

                            transition-transform
                            duration-500
                          "
                        />

                        {/* Category */}

                        <span
                          className="
                            absolute

                            top-[9px]
                            left-[9px]

                            sm:top-4
                            sm:left-4

                            bg-white

                            text-[#13295C]

                            text-[7px]
                            sm:text-[10px]

                            font-bold

                            py-[4px]
                            px-[8px]

                            sm:py-1.5
                            sm:px-3

                            rounded-full

                            shadow-sm
                          "
                        >
                          {post.category}
                        </span>
                      </div>

                      {/* Card body */}

                      <div
                        className="
                          p-[11px]
                          sm:p-6
                          md:p-6

                          flex-1
                        "
                      >
                        {/* Metadata */}

                        <div
                          className="
                            flex
                            items-center
                            gap-[5px]
                            sm:gap-2

                            text-[#5B6882]

                            text-[7px]
                            sm:text-[10px]

                            font-medium

                            mb-[7px]
                            sm:mb-3
                          "
                        >
                          <span>{post.publishedAt}</span>

                          <span className="text-[#3FC3D3]">•</span>

                          <span>{post.author}</span>
                        </div>

                        {/* Title */}

                        <h4
                          className="
                            text-[#0E1A33]

                            text-[12px]
                            sm:text-[17px]
                            md:text-[19px]

                            font-bold

                            leading-[1.2]

                            mb-[7px]
                            sm:mb-3

                            group-hover:text-[#1D5FA8]

                            transition-colors
                          "
                        >
                          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                        </h4>

                        {/* Excerpt */}

                        <p
                          className="
                            text-[#3F4D6B]

                            text-[7.5px]
                            sm:text-[12px]

                            leading-[1.5]

                            line-clamp-3
                          "
                        >
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Read link */}

                      <div
                        className="
                          px-[11px]
                          sm:px-6

                          pb-[11px]
                          sm:pb-5

                          pt-[8px]
                          sm:pt-3

                          border-t
                          border-[#F0F4FA]
                        "
                      >
                        <Link
                          to={`/blog/${post.slug}`}
                          className="
                            inline-flex
                            items-center

                            text-[#1D5FA8]

                            font-bold

                            text-[8px]
                            sm:text-[12px]

                            group-hover:text-[#0A1A3F]

                            transition-colors
                          "
                        >
                          <span>Read full article</span>

                          <span
                            className="
                              ml-[6px]
                              sm:ml-2

                              w-[15px]
                              h-[15px]

                              sm:w-[21px]
                              sm:h-[21px]

                              rounded-full

                              bg-[#13295C]

                              text-white

                              flex
                              items-center
                              justify-center

                              text-[8px]
                              sm:text-[10px]
                            "
                          >
                            →
                          </span>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {/* =================================================
                  NO RESULTS
              ================================================= */}

              {filteredCards.length === 0 && (
                <div
                  className="
                    bg-white
                    rounded-[20px]
                    sm:rounded-3xl

                    p-8
                    sm:p-12

                    text-center

                    border
                    border-[#E1E8F3]
                  "
                >
                  <p
                    className="
                      text-[#5B6882]
                      text-sm
                      sm:text-base
                      mb-4
                    "
                  >
                    No articles found matching your search.
                  </p>

                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All Categories");
                    }}
                    className="
                      text-[#1D5FA8]
                      font-bold
                      underline
                    "
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>

            {/* =================================================
                SIDEBAR
            ================================================= */}

            <aside
              className="
                w-full
                lg:w-[300px]
                xl:w-[310px]

                shrink-0

                flex
                flex-col

                gap-[14px]
                sm:gap-5
                lg:gap-5
              "
            >
              {/* =================================================
                  SEARCH
              ================================================= */}

              <div
                className="
                  bg-white

                  rounded-[18px]
                  sm:rounded-[24px]

                  p-[12px]
                  sm:p-6

                  border
                  border-[#E1E8F3]

                  shadow-[0_12px_28px_rgba(10,26,63,0.08)]
                "
              >
                <h3
                  className="
                    text-[#0A1A3F]
                    font-bold

                    text-[11px]
                    sm:text-[17px]

                    mb-[9px]
                    sm:mb-4
                  "
                >
                  Search blogs
                </h3>

                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Type to search..."
                    className="
                      w-full

                      bg-white

                      border
                      border-[#D5E1F0]

                      focus:border-[#3FC3D3]

                      rounded-full

                      py-[7px]
                      sm:py-3

                      pl-[10px]
                      sm:pl-4

                      pr-8
                      sm:pr-10

                      text-[8px]
                      sm:text-sm

                      text-[#0A1A3F]

                      placeholder-[#8C9AA8]

                      focus:outline-none

                      transition-colors
                    "
                  />

                  {/* Search icon */}

                  <div
                    className="
                      absolute
                      right-[9px]
                      sm:right-4

                      top-1/2
                      -translate-y-1/2

                      text-[#8C9AA8]

                      pointer-events-none
                    "
                  >
                    <svg
                      className="
                        w-[10px]
                        h-[10px]
                        sm:w-4
                        sm:h-4
                      "
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* =================================================
                  CATEGORIES
              ================================================= */}

              <div
                className="
                  bg-white

                  rounded-[18px]
                  sm:rounded-[24px]

                  p-[12px]
                  sm:p-6

                  border
                  border-[#E1E8F3]

                  shadow-[0_12px_28px_rgba(10,26,63,0.08)]
                "
              >
                <h3
                  className="
                    text-[#0A1A3F]
                    font-bold

                    text-[11px]
                    sm:text-[17px]

                    mb-[9px]
                    sm:mb-4
                  "
                >
                  Categories
                </h3>

                <div className="flex flex-col">
                  {CATEGORIES.map((cat) => {
                    const isSelected = selectedCategory === cat.name;

                    return (
                      <button
                        key={cat.name}
                        onClick={() => setSelectedCategory(cat.name)}
                        className={`
                          flex
                          items-center
                          justify-between
                          w-full

                          px-[4px]
                          sm:px-0

                          py-[7px]
                          sm:py-3

                          border-t
                          border-[#EDF1F6]

                          text-left

                          text-[8px]
                          sm:text-[13px]

                          font-medium

                          transition-colors

                          ${
                            isSelected
                              ? "text-[#1D5FA8]"
                              : "text-[#3F4D6B] hover:text-[#1D5FA8]"
                          }
                        `}
                      >
                        <span>{cat.name}</span>

                        <span
                          className="
                            flex
                            items-center
                            justify-center

                            min-w-[15px]
                            h-[15px]

                            sm:min-w-[22px]
                            sm:h-[22px]

                            px-[4px]

                            rounded-full

                            bg-[#EEF4FB]

                            text-[#1D5FA8]

                            text-[7px]
                            sm:text-[10px]
                          "
                        >
                          {cat.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
