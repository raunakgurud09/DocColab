"use client"

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";


import BreadcrumbItem from "./BreadcrumbItem";

interface IBreadcrumb {
  href: string;
  label: string;
  isCurrent: boolean;
}

const Breadcrumb = (): JSX.Element => {

  const _path = usePathname()
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumb[]>([]);

  useEffect(() => {
    const path = _path.replace(/#.*/, "");

    const pathWithoutQuery = path.split("?")[0];
    let pathArray = pathWithoutQuery.split("/");
    pathArray.shift();
    pathArray = pathArray.filter((path: string) => path !== "");

    const breadcrumbs = pathArray.map((path: any, index: number) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      return {
        href,
        label: path,
        isCurrent: index === pathArray.length - 1,
      };
    });

    setBreadcrumbs(breadcrumbs);
  }, [_path]);

  return (
    <ol aria-label="breadcrumb" className="flex space-x-2">
      <BreadcrumbItem href="/" isRoot>
        ~
      </BreadcrumbItem>
      {breadcrumbs &&
        breadcrumbs.map(({ href, label, isCurrent }) => (
          <BreadcrumbItem href={href} isCurrent={isCurrent} key={href}>
            {label}
          </BreadcrumbItem>
        ))}
    </ol>
  );
};

export default Breadcrumb;
