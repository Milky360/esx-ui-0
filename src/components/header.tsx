"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession, signOut, getCsrfToken } from "next-auth/react";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Avatar, Badge } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Authentication from "./authentication";

const parseCookie = (str: string) =>
  str.length > 0
    ? str
        .split(";")
        .map((v) => v.split("="))
        .reduce((acc: any, v) => {
          acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(
            v[1].trim()
          );
          return acc;
        }, {})
    : {};

export function useProfilePhoto() {
  const [is_loading, setIsLoading] = useState(true);
  const [photo, setPhoto] = useState(null);
  useEffect(() => {
    if (typeof document != "undefined") {
      const cookie = parseCookie(document.cookie);

      if (is_loading) {
        if (cookie?.profile_image) {
          setPhoto(cookie?.profile_image);
          setIsLoading(false);
        } else {
          fetch("/api/fetch_me")
            .then((rs) => rs.json())
            .then((result) => {
              setPhoto(result.profile_image);
              setIsLoading(false);
            })
            .catch((res) => {});
        }
      }
    }
  }, []);

  return [is_loading, photo];
}
export default function GlobalHeader({
  no_absolute = false,
  hide_authentication = false,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [menuOpened, setMenuOpened] = useState(false);
  const [dialog, setDialog] = useState<string | null>("none");
  const [csrfToken, setCsrf] = useState<string | null>(null);
  const { data: session, status } = useSession();
  // const [is_loading, p_photo] = useProfilePhoto();
  const pathname = usePathname();

  console.log("session data ---->", session, status);

  // Handling query params
  useEffect(() => {
    const auth = searchParams.get("auth");

    if (auth) {
      if (auth === "signin") {
        setDialog("login");
      }
      //  else if (auth === "signup") {
      //   setDialog("register");
      // }
    }
  }, [searchParams]);

  // Handle CSRF token when dialog changes
  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const token = await getCsrfToken();
        setCsrf(token || null); // Ensure it's either a string or null
      } catch (error) {
        console.error("Failed to fetch CSRF token:", error);
        setCsrf(null); // Handle error by setting CSRF token to null
      }
    };

    if (dialog !== "none") {
      // Ensure the token is fetched only when dialog is set
      fetchCsrfToken();
    }
  }, [dialog]);

  return (
    <header className="h-[98px] shadow-md fixed z-40 bg-white left-0 right-0">
      <nav className="flex items-center h-full pr-10">
        <Link href="/">
          <img src="/esx_logo.svg" alt="Logo" className="h-[78px]" />
        </Link>

        {/* Right Section - Auth Buttons or User Profile */}
        <div className="flex items-center gap-6 ml-auto">
          <Link href={`/registration/issuer?stage=1`} className="text-xl">
            Sign Up
          </Link>
          <Link href={`?auth=signin`} className="text-xl">
            Login
          </Link>
        </div>
      </nav>
      <Authentication />
    </header>
  );
}

// <header
//   id="header_container_ref"
//   className={clsx(
//     " fixed w-full h-[98px] bg-white shadow-md flex items-center pr-[7%] z-20", // Flexbox ensures vertical centering
//     no_absolute ? "static" : "fixed" // Dynamically applying positioning
//   )}
//   style={{ top: menuOpened ? "0" : undefined }}
// >
//   <nav className="w-full flex justify-between items-center p-4">
//     <div className="flex items-center space-x-8">
//       <Link href="/">
//         <img src="/esx_logo.svg" alt="Logo" className="h-[78px]" />
//       </Link>
//       <Link href="/test" className="text-[20px] font-bold">
//         Discover
//       </Link>
//       <Link href="" className="text-[20px] font-bold">
//         Search
//       </Link>
//     </div>

//     {/* Right Section - Auth Buttons or User Profile */}
//     <div className="flex items-center space-x-20">
//       <div className="flex items-center space-x-12">
//         <Link href="" className="text-[20px]">
//           Raise Capital
//         </Link>
//         <Link href="" className="text-[20px]">
//           Invest in Companies
//         </Link>
//       </div>

//       {/* Authentication Buttons */}
//       {!hide_authentication && status !== "authenticated" && (
//         <div className="flex items-center space-x-6">
//           <Link href="/" className="text-[16px] font-semibold">
//             Sign Up
//           </Link>
//           <Link
//             href={`${pathname}/?auth=signin`}
//             className="text-[16px] font-semibold"
//           >
//             Login
//           </Link>
//         </div>
//       )}

//       {/* User Profile */}
//       {status === "authenticated" && session.user && (
//         <div className="relative flex">
//           <Link href="/profile/me">
//             <div className="relative flex items-center justify-center cursor-pointer mr-5">
//               <Badge overflowCount={9} count={5} showZero={false}>
//                 <Avatar
//                   size={42}
//                   className="w-10 h-10 rounded-full overflow-hidden relative"
//                   icon={<UserOutlined />}
//                   src={session.user?.image}
//                 />
//               </Badge>
//             </div>
//           </Link>

//           <button
//             className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
//             onClick={async () => {
//               console.log("Logging out...");
//               await signOut({ redirect: false }); // Prevent redirect to sign-in page immediately
//             }}
//           >
//             Log Out
//           </button>

//           {menuOpened && (
//             <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
//               <Link
//                 href="/profile"
//                 className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//               >
//                 Profile
//               </Link>
//               <Link
//                 href="/notifications"
//                 className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//               >
//                 Notifications
//               </Link>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   </nav>
//   <Authentication />
// </header>
