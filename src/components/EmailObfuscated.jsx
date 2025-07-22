import { useEffect, useState } from "react";

export default function EmailObfuscated() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Obfuscate here however you like – this is a simple split
    const user = "connectingdotscoding";
    const domain = "gmail.com";
    setEmail(`${user}@${domain}`);
  }, []);

  return (
    <>
      {email ? (
        <a href={`mailto:${email}`} className="text-blue-500 underline">
          {email}
        </a>
      ) : (
        <span>Loading email...</span>
      )}
      <noscript>
        <span className="text-gray-500 italic">
          Email hidden for spam protection. Please enable JavaScript to view.
        </span>
      </noscript>
    </>
  );
}
