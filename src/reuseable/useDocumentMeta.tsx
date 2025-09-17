import { useEffect } from "react";

interface UseDocumentMetaProps {
  title: string;
  description?: string;
  canonicalUrl?: string;
}

export function useDocumentMeta({
  title,
  description,
  canonicalUrl,
}: UseDocumentMetaProps) {
  useEffect(() => {
    const defaultTitle = document.title;
    document.title = title;
    let metaDescription = document.querySelector("meta[name='description']");
    if (!metaDescription && description) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    if (metaDescription && description) {
      metaDescription.setAttribute("content", description);
    }
    let canonicalLink = document.querySelector("link[rel='canonical']");
    const finalCanonicalUrl = window.location.href;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    if (canonicalLink) {
      canonicalLink.setAttribute("href", finalCanonicalUrl);
    }
    return () => {
      document.title = defaultTitle;
      if (metaDescription && description) {
        metaDescription.setAttribute("content", "");
      }
    };
  }, [title, description, canonicalUrl]);
}
