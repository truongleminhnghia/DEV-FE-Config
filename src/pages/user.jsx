import { useEffect } from "react";
import { getByEmail, user } from "../utils/api";

const UserPage = () => {
  useEffect(() => {
    const apiUser = async () => {
      const res = await user();
      if (res) {
        console.log(">>> ress", res.data);
      }
    };
    apiUser();
  }, []);
  return <div>User page</div>;
};

export default UserPage;
