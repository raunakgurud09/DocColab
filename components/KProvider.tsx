"use client"

import {
  Action,
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarSearch,
} from "kbar";
import { ReactNode } from "react";

import { Home, Book, Target, Briefcase, Layout, ToggleLeft, Code, Search, ArrowRight, LayoutPanelTop, BookOpen, HeartHandshake } from "lucide-react";


interface KProviderProps {
  children: ReactNode;
}
import cx from "classnames";

interface KbdProps {
  children: ReactNode;
  className?: string;
}
import { KBarResults, useMatches } from "kbar";
import { ReactElement, cloneElement } from "react";
import { useTheme } from "next-themes";


const KResults = () => {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className="px-3 pt-4 pb-2 text-sm text-gray-100/10">{item}</div>
        ) : (
          <div
            className={cx(
              "flex cursor-pointer items-center justify-between rounded-lg px-3 py-3 transition-colors",
              active ? "bg-muted/80" : "bg-transparent"
            )}
          >
            <div className="flex items-center">
              {item.icon && (
                <div className="mr-4">
                  {cloneElement(item.icon as ReactElement<any>, {
                    className: "h-4 w-4",
                  })}
                </div>
              )}
              {item.parent && (
                <>
                  <span className="opacity-60">
                    {
                      item.ancestors.find(
                        ancestor => ancestor.id === item.parent
                      )?.name
                    }
                  </span>
                  <span className="opacity-60">
                    <ArrowRight className="mx-2 h-4 w-4" />
                  </span>
                </>
              )}
              <span className="text-md">{item.name}</span>
            </div>
            {item.shortcut?.length && (
              <div className="flex items-center justify-center space-x-2">
                {item.shortcut.map(shortcut => (
                  <Kbd key={shortcut}>{shortcut}</Kbd>
                ))}
              </div>
            )}
          </div>
        )
      }
    />
  );
};

const Kbd = ({ children, className }: KbdProps): JSX.Element => {
  return (
    <>
      <kbd
        className={cx(
          "rounded-md border-[1px] border-[#4a4a4a] bg-background/5 px-2 py-0.5 text-sm",
          className
        )}
      >
        {children}
      </kbd>
    </>
  );
};

const KProvider = ({ children }: KProviderProps): JSX.Element => {
  // const { push } = useRouter();
  const { setTheme, theme } = useTheme()

  const actions: Action[] = [
    {
      id: "home",
      name: "Home",
      keywords: "index root",
      shortcut: ["h"],
      perform: () => window.location.href = "/",
      section: "Pages",
      icon: <Home />,
    },
    {
      id: "Project",
      name: "Project",
      keywords: "Project",
      shortcut: ["p"],
      perform: () => window.location.href = "/dashboard/projects",
      section: "Pages",
      icon: <LayoutPanelTop />,
    },
    {
      id: "Organizations",
      name: "Organization",
      keywords: "Organization",
      shortcut: ["o"],
      perform: () => window.location.href = "/dashboard/orgs/ndsfink/general",
      section: "Pages",
      icon: <LayoutPanelTop />,
    },
    {
      id: "Theme",
      name: "Theme",
      keywords: "Theme",
      shortcut: ["t"],
      perform: () => { },
      section: "Pages",
      icon: <LayoutPanelTop />,
    },
    // {
    //   id: "Blog",
    //   name: "Blog",
    //   keywords: "Blog",
    //   shortcut: ["b"],
    //   perform: () => window.location.href = "/blog",
    //   section: "Pages",
    //   icon: <LayoutPanelTop />,
    // },
    // {
    //   id: "Doc",
    //   name: "Doc",
    //   keywords: "Doc",
    //   shortcut: ["a"],
    //   perform: () => window.location.href = "/",
    //   section: "Pages",
    //   icon: <BookOpen />,
    // },
    // {
    //   id: "Help",
    //   name: "Help",
    //   keywords: "Help",
    //   section: "Pages",
    //   icon: <HeartHandshake />,
    // },
    // {
    //   id: "projects-page",
    //   name: "All Projects",
    //   keywords: "projects creations apps repositories",
    //   shortcut: ["p"],
    //   parent: "projects",
    //   perform: () => window.location.href = "/",
    // },
    // {
    //   id: "blog",
    //   name: "Blog",
    //   keywords: "blogs blog post articles tutorials",
    //   section: "Pages",
    //   icon: <Layout />,
    // },
    // {
    //   id: "blogs-page",
    //   name: "All Blog Posts",
    //   keywords: "blogs blog post articles tutorials",
    //   shortcut: ["b"],
    //   parent: "blog",
    //   perform: () => window.location.href = "/",
    // }
  ];

  // socials.map(social => {
  //   actions.push({
  //     id: social.id,
  //     name: social.name,
  //     perform: () => window.open(social.url),
  //     section: "Socials",
  //     icon: social.icon,
  //   });
  // });

  actions.push({
    id: "source-code",
    name: "Source Code",
    keywords: "source code",
    perform: () => window.open("https://github.com/AnishDe12020/portfolio"),
    section: "Socials",
    icon: <Code />,
  });

  // allProjects.map(project => {
  //   actions.push({
  //     id: project._id,
  //     name: project.name,
  //     perform: () => push("/projects/" + project.slug),
  //     icon: <IconFactory name={project.iconName} />,
  //     parent: "projects",
  //   });
  // });

  // hashnodeData.posts.map(post => {
  //   actions.push({
  //     id: post._id,
  //     name: post.title,
  //     perform: () => window.open(`https://${hashnodeData.domain}/${post.slug}`),

  //     parent: "blog",
  //   });
  // });

  return (
    <>
      <KBarProvider actions={actions}>
        <KBarPortal>
          <KBarPositioner className="z-70 bg-background/10 backdrop-blur-md ">
            <KBarAnimator className="mx-auto w-[32rem] overflow-hidden rounded-xl border-[1px] border-tertiary bg-background/60 px-4 drop-shadow-2xl ">
              <div className="mx-2 flex items-end justify-between py-4">
                <span>
                  <Search className="mr-2 mb-0.5 h-5 w-5 text-primary" />
                </span>
                <KBarSearch className="w-full rounded-md border-b border-none border-gray-300 bg-transparent pt-2 text-gray-100 outline-none" />
                <Kbd>esc</Kbd>
              </div>

              <KResults />
              <div className="h-4" />
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>
        {children}
      </KBarProvider>
    </>
  );
};

export default KProvider;
