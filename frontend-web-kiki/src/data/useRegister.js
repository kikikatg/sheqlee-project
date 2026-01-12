import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useRegister = ({ role }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const register = async (payload) => {
    setLoading(true);
    setApiError("");

    try {
      /*
      // 🔌 BACKEND (future)
      const res = await fetch(`/api/auth/register/${role}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Registration failed");
      */

      // ✅ TEMP success simulation
      await new Promise((r) => setTimeout(r, 800));

      // ✅ ROLE-BASED NAVIGATION (FOR NOW)
      if (role === "company") navigate("/user");
      if (role === "freelancer") navigate("/update-profile");
      if (role === "professional") navigate("/professional-dashboard");
    } catch (err) {
      setApiError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, apiError };
};

export default useRegister;
