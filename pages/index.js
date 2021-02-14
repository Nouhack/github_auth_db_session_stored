import { useSession } from "next-auth/client";
import Login from "../components/LogIn";
import Content from "../components/Content";
import Loading from "../components/Loading";
export default function Page() {
  const [session, loading] = useSession();

  if (loading) {
    return <Loading />;
  }

  if (!session) {
    return <Login />;
  }

  return <Content />;
}
