"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Input from "../../components/input";
import Button from "@/app/components/Button";

function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Login failed");
      }

      router.push("/company");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-3/4 flex flex-col justify-center space-y-8"
    >
      <h1 className="text-xl text-[#f7e7ce] font-bold">Sign in to PMS TOG</h1>
      <div className="w-full">
        <Input
          name="email"
          type="email"
          placeholder="E-mail Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="w-full">
        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      {error ? <p className="text-sm text-red-400">{error}</p> : null}
      <Button
        variant="normal"
        type="submit"
        color="primary"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Signing in..." : "Log In"}
      </Button>
    </form>
  );
}

export default LoginForm;
