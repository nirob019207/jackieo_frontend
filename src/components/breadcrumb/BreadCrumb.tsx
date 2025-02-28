"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function BreadCrumb() {
  const params = useParams();
  const pathname = usePathname();

  // Convert URL path to breadcrumb items
  const generateBreadcrumbs = () => {
    // Remove any query parameters
    const asPathWithoutQuery = pathname.split("?")[0];

    // Split pathname into segments
    const segments = asPathWithoutQuery.split("/").filter((segment) => segment !== "");

    // Generate breadcrumb items
    return segments.map((segment, index) => {
      // Build the URL for this segment
      const url = `/${segments.slice(0, index + 1).join("/")}`;

      // Format the segment text (convert camelCase to readable text)
      const text = segment
        .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before uppercase letters
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
        .join(" "); // Join with a space

      return {
        text,
        url,
        isLast: index === segments.length - 1,
      };
    });
  };

  const breadcrumbs = generateBreadcrumbs();

  if (!breadcrumbs.length) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
            Home
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.url} className="flex items-center">
            <ChevronRight className="h-4 w-4 text-gray-500 mx-1" />
            {breadcrumb.isLast ? (
              <span className="text-gray-500 text-sm font-medium">{breadcrumb.text}</span>
            ) : (
              <Link href={breadcrumb.url} className="text-gray-700 hover:text-gray-900 text-sm font-medium">
                {breadcrumb.text}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
