import React from "react";

export interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

export function extractHeadings(markdown: string): HeadingItem[] {
  const headings: HeadingItem[] = [];
  const lines = markdown.split("\n");

  for (const line of lines) {
    const trimmed = line.trim();
    const match = trimmed.match(/^(#{1,4})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
      headings.push({ id, text, level });
    }
  }

  return headings;
}

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export default function MarkdownContent({ content, className = "" }: MarkdownContentProps) {
  const renderInline = (text: string): React.ReactNode => {
    // Process links [text](url)
    const parts: React.ReactNode[] = [];
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    const parseFormatting = (chunk: string): React.ReactNode[] => {
      // Bold **text**
      const boldParts = chunk.split(/(\*\*[^*]+\*\*)/g);
      return boldParts.flatMap((bChunk, bIdx) => {
        if (bChunk.startsWith("**") && bChunk.endsWith("**")) {
          return (
            <strong key={`b-${bIdx}`} className="font-bold text-[#0A1A3F]">
              {bChunk.slice(2, -2)}
            </strong>
          );
        }
        // Italic *text*
        const italicParts = bChunk.split(/(\*[^*]+\*)/g);
        return italicParts.map((iChunk, iIdx) => {
          if (iChunk.startsWith("*") && iChunk.endsWith("*")) {
            return (
              <em key={`i-${iIdx}`} className="italic text-[#1D5FA8]">
                {iChunk.slice(1, -1)}
              </em>
            );
          }
          // Inline code `code`
          const codeParts = iChunk.split(/(`[^`]+`)/g);
          return codeParts.map((cChunk, cIdx) => {
            if (cChunk.startsWith("`") && cChunk.endsWith("`")) {
              return (
                <code
                  key={`c-${cIdx}`}
                  className="bg-[#EEF4FB] text-[#13295C] px-1.5 py-0.5 rounded text-sm font-mono"
                >
                  {cChunk.slice(1, -1)}
                </code>
              );
            }
            return cChunk;
          });
        });
      });
    };

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(...parseFormatting(text.substring(lastIndex, match.index)));
      }
      parts.push(
        <a
          key={`link-${match.index}`}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1D5FA8] hover:text-[#0A1A3F] underline font-semibold transition-colors"
        >
          {match[1]}
        </a>
      );
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push(...parseFormatting(text.substring(lastIndex)));
    }

    return parts.length > 0 ? parts : text;
  };

  // Group lines into blocks
  const lines = content.split("\n");
  const blocks: React.ReactNode[] = [];
  let currentList: { type: "ul" | "ol"; items: string[] } | null = null;
  let inCodeBlock = false;
  let codeBlockContent: string[] = [];
  let currentBlockquote: string[] = [];

  const flushList = (key: number) => {
    if (!currentList) return;
    if (currentList.type === "ul") {
      blocks.push(
        <ul key={`ul-${key}`} className="my-5 space-y-2.5 list-none pl-1">
          {currentList.items.map((item, idx) => (
            <li key={idx} className="flex items-start text-base sm:text-[17px] text-[#3F4D6B] leading-relaxed">
              <span className="text-[#3FC3D3] mr-3 mt-1 font-bold text-sm shrink-0">●</span>
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );
    } else {
      blocks.push(
        <ol key={`ol-${key}`} className="my-5 space-y-2.5 list-none pl-1">
          {currentList.items.map((item, idx) => (
            <li key={idx} className="flex items-start text-base sm:text-[17px] text-[#3F4D6B] leading-relaxed">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#EEF4FB] text-[#1D5FA8] text-xs font-bold mr-3 mt-0.5 shrink-0">
                {idx + 1}
              </span>
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ol>
      );
    }
    currentList = null;
  };

  const flushBlockquote = (key: number) => {
    if (currentBlockquote.length === 0) return;
    blocks.push(
      <blockquote
        key={`quote-${key}`}
        className="my-6 pl-5 border-l-4 border-[#3FC3D3] bg-[#F7F9FC] py-4 pr-5 rounded-r-2xl italic text-[#13295C] text-base sm:text-lg"
      >
        {currentBlockquote.map((line, idx) => (
          <p key={idx} className="my-1 leading-relaxed">
            {renderInline(line)}
          </p>
        ))}
      </blockquote>
    );
    currentBlockquote = [];
  };

  lines.forEach((rawLine, idx) => {
    const line = rawLine.trim();

    // Code block delimiters
    if (line.startsWith("```")) {
      if (inCodeBlock) {
        blocks.push(
          <pre
            key={`code-${idx}`}
            className="my-6 p-5 bg-[#0A1A3F] text-[#E3ECF9] rounded-2xl overflow-x-auto text-sm font-mono border border-white/10"
          >
            <code>{codeBlockContent.join("\n")}</code>
          </pre>
        );
        codeBlockContent = [];
        inCodeBlock = false;
      } else {
        flushList(idx);
        flushBlockquote(idx);
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      codeBlockContent.push(rawLine);
      return;
    }

    // Blank line
    if (!line) {
      flushList(idx);
      flushBlockquote(idx);
      return;
    }

    // Blockquote
    if (line.startsWith(">")) {
      flushList(idx);
      currentBlockquote.push(line.replace(/^>\s*/, ""));
      return;
    }
    flushBlockquote(idx);

    // Unordered List
    if (/^[-*]\s+/.test(line)) {
      const itemText = line.replace(/^[-*]\s+/, "");
      if (!currentList || currentList.type !== "ul") {
        flushList(idx);
        currentList = { type: "ul", items: [itemText] };
      } else {
        currentList.items.push(itemText);
      }
      return;
    }

    // Ordered List
    if (/^\d+\.\s+/.test(line)) {
      const itemText = line.replace(/^\d+\.\s+/, "");
      if (!currentList || currentList.type !== "ol") {
        flushList(idx);
        currentList = { type: "ol", items: [itemText] };
      } else {
        currentList.items.push(itemText);
      }
      return;
    }

    // Not a list item
    flushList(idx);

    // Headings
    if (line.startsWith("#### ")) {
      const text = line.replace("#### ", "");
      const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
      blocks.push(
        <h4 key={`h4-${idx}`} id={id} className="text-lg sm:text-xl font-bold text-[#0A1A3F] mt-6 mb-3 scroll-mt-28">
          {renderInline(text)}
        </h4>
      );
      return;
    }

    if (line.startsWith("### ")) {
      const text = line.replace("### ", "");
      const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
      blocks.push(
        <h3 key={`h3-${idx}`} id={id} className="text-xl sm:text-2xl font-bold text-[#0A1A3F] mt-8 mb-3.5 scroll-mt-28">
          {renderInline(text)}
        </h3>
      );
      return;
    }

    if (line.startsWith("## ")) {
      const text = line.replace("## ", "");
      const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
      blocks.push(
        <h2
          key={`h2-${idx}`}
          id={id}
          className="text-2xl sm:text-3xl font-bold text-[#0A1A3F] mt-10 mb-4 pb-2 border-b border-[#E1E8F3] first:mt-0 scroll-mt-28"
        >
          {renderInline(text)}
        </h2>
      );
      return;
    }

    if (line.startsWith("# ")) {
      const text = line.replace("# ", "");
      const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
      blocks.push(
        <h1 key={`h1-${idx}`} id={id} className="text-3xl sm:text-4xl font-bold text-[#0A1A3F] mt-6 mb-4 scroll-mt-28">
          {renderInline(text)}
        </h1>
      );
      return;
    }

    // Horizontal Rule
    if (/^---$|^\*\*\*$|^___$/.test(line)) {
      blocks.push(<hr key={`hr-${idx}`} className="my-8 border-t border-[#E1E8F3]" />);
      return;
    }

    // Regular Paragraph
    blocks.push(
      <p key={`p-${idx}`} className="text-base sm:text-[17px] text-[#3F4D6B] leading-relaxed my-4">
        {renderInline(line)}
      </p>
    );
  });

  flushList(lines.length);
  flushBlockquote(lines.length);

  return <div className={`markdown-body space-y-1 ${className}`}>{blocks}</div>;
}

