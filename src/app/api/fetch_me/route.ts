import { getSession } from "next-auth/react";

import { execute } from "@/utils/django";

export default async function fetch_me(
  req: any,
  res: {
    setHeader: (arg0: string, arg1: string) => void;
    status: (arg0: number) => {
      (): any;
      new (): any;
      send: { (arg0: string): void; new (): any };
    };
  }
) {
  const session: any = await getSession({ req });
  if (session) {
    // const subject = parseSession(session);
    const subject = { userId: "userID" };
    const user_data = await execute("GET_USER_METHOD", {
      userId: subject.userId,
    });

    if (user_data.profile_image) {
      res.setHeader(
        "Set-Cookie",
        `profile_image=${user_data.profile_image}; Path=/; max-age=21600`
      );
    }
    res.status(200).send(user_data);
  } else {
    res.status(403).send("Forbidden!");
  }
}
