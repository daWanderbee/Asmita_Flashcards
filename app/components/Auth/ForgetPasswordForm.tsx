import { Card } from "@/app/ui/card";
import { Button } from "@/app/ui/button";

const ForgotPasswordForm = () => {
  return (
    <div className="w-full flex items-center justify-center px-6">
      <Card>
        <h1 className="text-4xl text-black font-semibold mb-6">
          Forgot Password?
        </h1>

        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="text-sm text-black">
              Enter your username or email address
            </label>
            <input
              type="text"
              placeholder="Username or email address"
              className="
                mt-2 w-full rounded-xl border border-gray-300
                px-4 py-2.5 text-sm text-muted
                focus:outline-none focus:ring-2 focus:ring-primary
              "
            />
          </div>

          {/* Reset */}
          <Button type="submit">Reset Password</Button>
        </form>
      </Card>
    </div>
  );
};

export default ForgotPasswordForm;
