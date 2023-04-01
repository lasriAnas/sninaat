"use client";
import { Auth } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "utils/firebase";

export default function Calendar() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  console.log(user);
  if (!user) route.push("/admin");
  return (
    <div className="h-screen">
      <h1>welcome {user.email} </h1>

      <button onClick={() => auth.signOut()}>Sign out</button>
    </div>
  );
}
