import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";

const FormLogoutServer = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/auth" });
      }}
    >
      <Button variant="destructive">Logout Server</Button>
    </form>
  );
};

export default FormLogoutServer;
