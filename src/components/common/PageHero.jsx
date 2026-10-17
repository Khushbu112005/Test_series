import React from "react";
import { House } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

function PageHero({
  badge,
  title,
  description,
  showHomeIcon = true,

  // Breadcrumb colors
  homeColor = "text-[#94A3B8]",
  breadcrumbLinkColor = "text-[#94A3B8]",
  breadcrumbCurrentColor = "text-[#FFFFFF]",
  breadcrumbSeparatorColor = "text-[#64748B]",

  className = "",
  backgroundClassName = "bg-[linear-gradient(104.34deg,#171F31_0%,#3E4859_55%,#606875_100%)]",
  containerClassName = "",
  padding = "px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 pt-28 sm:pt-32 lg:pt-40 xl:pt-48 pb-12 sm:pb-20 lg:pb-24 xl:pb-30",
  titleClassName = "",
  breadcrumbClassName = "",
  descriptionClassName = "",
  children,
}) {
  const location = useLocation();

  // Get URL parts
  const paths = location.pathname.split("/").filter(Boolean);

  // Remove numeric IDs
  const breadcrumbPaths = paths.filter((path) => !/^\d+$/.test(path));

  // Create breadcrumb data
  const breadcrumbs = breadcrumbPaths.map((path) => {
    const label = path
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    return {
      label,
      path,
    };
  });

  return (
    <div className={`${padding} ${backgroundClassName} ${className}`}>
      <div
        className={`grid ${
          children ? "grid-cols-1 lg:grid-cols-2 gap-8" : ""
        } ${containerClassName}`}
      >
        {/* Left Content */}
        <div className="flex flex-col gap-4 text-[10px] text-[#94A3B8]">
          {/* Breadcrumb */}
          <div
            className={`flex flex-wrap items-center gap-2 font-inter text-[12px] ${breadcrumbClassName}`}
          >
            {/* Home */}
            <NavLink to="/" className={`flex items-center gap-2 ${homeColor}`}>
              {showHomeIcon && <House size={14} strokeWidth={1.5} />}

              <span>Home</span>
            </NavLink>

            {/* Breadcrumbs */}
            {breadcrumbs.map((item, index) => (
              <React.Fragment key={item.path}>
                {/* Separator */}
                <span className={breadcrumbSeparatorColor}>›</span>

                {/* Current / Previous page */}
                {index === breadcrumbs.length - 1 ? (
                  <span className={breadcrumbCurrentColor}>{item.label}</span>
                ) : (
                  <NavLink
                    to={`/${breadcrumbPaths.slice(0, index + 1).join("/")}`}
                    className={breadcrumbLinkColor}
                  >
                    {item.label}
                  </NavLink>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Badge */}
          {badge && (
            <p className="text-[#22C3E6] text-[11px] font-bold font-dm-sans tracking-[2px]">
              {badge}
            </p>
          )}

          {/* Title */}
          {title && (
            <h1
              className={`text-white font-georgia font-bold max-w-xs md:max-w-md lg:max-w-none ${
                titleClassName ||
                "text-3xl sm:text-5xl lg:text-[72px] leading-[1.1] sm:leading-[1.05] lg:leading-[0.95]"
              }`}
            >
              {title}
            </h1>
          )}

          {/* Description */}
          {description && (
            <p
              className={`text-sm sm:text-[15px] break-words max-w-full ${
                descriptionClassName || "max-w-xl"
              }`}
            >
              {description}
            </p>
          )}
        </div>

        {/* Right Content */}
        {children && children}
      </div>
    </div>
  );
}

export default PageHero;
